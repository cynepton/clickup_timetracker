import { HexString } from '../generic/helperTypes';
import { TaskUrl } from './tasks';

/**
 * The allowed query filters when requesting for a list of time entries.
 * See: https://clickup.com/api/clickupreference/operation/Gettimeentrieswithinadaterange
 */
export type GetTimeEntriesFilterParamObject = {
    startDate?: Date;
    endDate?: Date;
    /**
     * Filter by `user_id`.
     * **Note**: Only Workspace Owners/Admins have access to do this.
     */
    userId?: number;
    /**
     * Only include time entries associated with tasks in a specific space, folder, list, or task.
     * Only one of the following location filters can be included at a time: `space_id`, `folder_id`, `list_id`, or `task_id`.
     */
    locationId?: {
        type: 'space' | 'folder' | 'list' | 'task';
        id: string;
    }
    allowCustomTaskId?: boolean;
}

/**
 * The Expected response format from the Clickup API when getting time entries.
 * See: https://clickup.com/api/clickupreference/operation/Gettimeentrieswithinadaterange
 */
export type ApiResponseGetTimeEntriesEntry = {
    id: string;
    task?: {
        id: string;
        custom_id?: string;
        name: string;
        status: {
            status: string;
            color: HexString;
            type: string;
            orderindex: number;
        },
        custom_type?: string|null;
    }
    wid: string;
    user: {
        id: number;
        username: string;
        email: string;
        color: HexString;
        initials: string;
        profilePicture: string;
    },
    billable: boolean;
    start: string;
    end?: string;
    duration: string;
    description: string;
    tags: {
        name: string;
        tag_fg: HexString;
        tag_bg: HexString;
        creator: number;
    }[] | [],
    source: string;
    at: string;
    task_location?: {
        space_id: string;
        folder_id: string;
        list_id: string;
    },
    task_url?: TaskUrl;
}