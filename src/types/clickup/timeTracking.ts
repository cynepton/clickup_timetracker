import { TaskUrl } from './tasks';
import { HexString } from '../generic/helperTypes';

/**
 * A tag associated with a time entry
 */
export type ClickupTimeEntryTag = {
    name: string;
    foregroundColor: HexString;
    backgroundColor: HexString;
    creatorId: number;
}

export type ClickupTimeEntry = {
    /**
     * Unique ID of the tme entry
     */
    id: string;
    /**
     * Basic information about the task associated with the time entry
     */
    task?: {
        id: string
        customId?: string;
        name: string;
        status: {
            status: string;
            color: HexString;
            type: string;
            orderIndex: number;
        }
        customType?: string | null;
    }
    /**
     * The workspace ID of the time entry
     */
    workspaceId: string;
    user: {
        id: number;
        username: string;
        email: string;
        color: HexString;
        initials: string;
        profilePicture: string;
    }
    /**
     * Indicates if the time entry is billable
     */
    isBillable: boolean;
    /**
     * The unix timestamp string of when the time entry was created
     */
    start: Date;
    /**
     * The unix timestamp string of when the time entry was ended
     */
    end?: Date;
    /**
     * The duration of the time entry in seconds
     */
    duration: string;
    /**
     * A description of the work done during that time entry
     */
    description: string;
    /**
     * A list of tags associated with the time entry
     */
    tags: ClickupTimeEntryTag[];
    source: string;
    at: string;

    /**
     * An object containing the list, folder and space IDs of the task associated with the time entry
     */
    taskLocation?: {
        listId: string;
        folderId: string;
        spaceId: string;
    };

    /**
     * The {@link TaskUrl} of the task associated with the time entry
     */
    taskUrl?: TaskUrl;
}