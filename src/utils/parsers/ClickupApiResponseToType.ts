import { ClickupTimeEntry } from '../../types/clickup/timeTracking';
import { ApiResponseGetTimeEntriesEntry } from '../../types/clickup/timeTrackingApiResponse';

export const parseClickupTimeEntriesFromApiResponse = (apiResponseTimeEntries: ApiResponseGetTimeEntriesEntry[]): ClickupTimeEntry[] => {
    const timeEntries =  apiResponseTimeEntries.map((timeEntry: ApiResponseGetTimeEntriesEntry) => {
        return {
            id: timeEntry.id,
            task: timeEntry.task && {
                id: timeEntry.task?.id,
                customId: timeEntry.task?.custom_id,
                name: timeEntry.task?.name,
                status: {
                    status: timeEntry.task?.status.status,
                    color: timeEntry.task?.status.color,
                    type: timeEntry.task?.status.type,
                    orderIndex: timeEntry.task?.status.orderindex,
                },
                customType: timeEntry.task?.custom_type,
            },
            workspaceId: timeEntry.wid,
            user: timeEntry.user,
            isBillable: timeEntry.billable,
            start: new Date(timeEntry.start),
            end: timeEntry.end ? new Date(timeEntry.end): undefined,
            duration: timeEntry.duration,
            description: timeEntry.description,
            tags: timeEntry.tags && timeEntry.tags.map((tag) => {
                return {
                    name: tag.name,
                    foregroundColor: tag.tag_fg,
                    backgroundColor: tag.tag_bg,
                    creatorId: tag.creator,
                };
            }),
            source: timeEntry.source,
            at: timeEntry.at,
            taskLocation: timeEntry.task_location && {
                spaceId: timeEntry.task_location.space_id,
                folderId: timeEntry.task_location.folder_id,
                listId: timeEntry.task_location.list_id,
            },
            taskUrl: timeEntry.task_url,
        };
    });
    return timeEntries;
};