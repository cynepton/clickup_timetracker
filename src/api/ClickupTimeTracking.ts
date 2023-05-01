import axios from 'axios';
import DefaultClickupApiConfig from '../config/clickupApiConfig';
import { ClickupTimeEntry } from '../types/clickup/timeTracking';
import { ApiResponseGetTimeEntriesEntry, GetTimeEntriesFilterParamObject } from '../types/clickup/timeTrackingApiResponse';
import { parseClickupTimeEntriesFromApiResponse } from '../utils/parsers/ClickupApiResponseToType';

/**
 * This class is a wrapper to expose the Clickup Time Tracking API.
 * It contains methods to perform time tracking related operations such as getting time entries,
 * starting a timer, and stopping a timer.
 */
export class ClickupTimeTrackerApi {
    private readonly token: string;

    readonly workspaceId: string;
    readonly clickupApiUrl: string = DefaultClickupApiConfig.apiUrl;

    constructor (token: string, workspaceId: string) {
        this.token = token;
        this.workspaceId = workspaceId;
    }

    /**
     * Get all time entries within a time range
     * By default, this endpoint returns time entries from the last 30 days created by the authenticated user.
     * To retrieve time entries for other users, you must include the assignee query parameter.
     * Only one of the following location filters can be included at a time: `space_id`, `folder_id`, `list_id`, or `task_id`.
     * 
     * @param {GetTimeEntriesFilterParamObject} queryParams the query parameters to filter the time entries
     * @returns {Promise<ClickupTimeEntry[]>} a promise that resolves to an array of ClickupTimeEntry objects
     */
    public async getTimeEntries (queryParams?: GetTimeEntriesFilterParamObject): Promise<ClickupTimeEntry[]> {

        const response = await axios.get(
            `${this.clickupApiUrl}/team/${this.workspaceId}/time_entries`,
            {
                headers: {
                    Authorization: this.token,
                },
                params: queryParams && {
                    start_date: queryParams.startDate?.getTime(),
                    end_date: queryParams.endDate?.getTime(),
                    assignee: queryParams.userId?.toString(),
                    // Ensure that only one location ID would be added to the params to prevent an error from clickup.
                    space_id: queryParams.locationId?.type === 'space' ? queryParams.locationId.id : undefined,
                    folder_id: queryParams.locationId?.type === 'folder' ? queryParams.locationId.id : undefined,
                    list_id: queryParams.locationId?.type === 'list' ? queryParams.locationId.id : undefined,
                    task_id: queryParams.locationId?.type === 'task' ? queryParams.locationId.id : undefined,
                }
            }
        );

        // Get the JSON data from the response and serialize it to the ClickupTimeEntry type
        return parseClickupTimeEntriesFromApiResponse(response.data.data as ApiResponseGetTimeEntriesEntry[]);
    }

    // public async startTimer(): Promise<string> {
    //     const response = await axios.post(
    //         `https://api.clickup.com/api/v2/task/${this.taskId}/time/track`,
    //         {
    //             start: Date.now().toString(),
    //             assignee: this.userId,
    //             status: 'in progress',
    //             task_id: this.taskId,
    //             time_estimate: 0,
    //             billable: false,
    //             workspace_id: this.workspaceId,
    //         },
    //         {
    //             headers: {
    //                 Authorization: this.token,
    //             },
    //         }
    //     );
    //     this.timeEntryId = response.data.id;
    //     return response.data.id;
    // }

    // public async stopTimer(): Promise<void> {
    //     await axios.put(
    //         `https://api.clickup.com/api/v2/task/${this.taskId}/time/track/${this.timeEntryId}`,
    //         {
    //             end: Date.now().toString(),
    //             status: 'in progress',
    //             task_id: this.taskId,
    //             time_estimate: 0,
    //             billable: false,
    //             workspace_id: this.workspaceId,
    //         },
    //         {
    //             headers: {
    //                 Authorization: this.token,
    //             },
    //         }
    //     );
    // }
}