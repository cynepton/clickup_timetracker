import { HexString } from '../generic/helperTypes';

export type ClickupStatus = {
    id: string;
    status: string;
    type: string;
    orderIndex: number;
    color: HexString;
}

type ClickupUserMember = {
    id: string;
    username: string;
    color: HexString;
    profilePicture?: string;
    initials: string;
}

export type ClickupMember = {
    user: ClickupUserMember;
}

export type ClickupSpace = {
    id?: string;
    name: string;
    color: HexString;
    isPrivate?: boolean;
    avatar?: string;
    adminCanManage?: string;
    statuses?: ClickupStatus[];
    multipleAssignees?: boolean;
    // TODO: Flesh out the features type
    features?: object;
    isArchived?: boolean;
    members?: ClickupMember[];
}