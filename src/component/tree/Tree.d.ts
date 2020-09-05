import React from 'react';

export interface TreeData {
    title?: string,
    key: string,
    children?: TreeData[]
}

export interface TreeNodeProps {
    data: TreeData[]
}

export interface TreeProps {
    /** （受控）展开指定的树节点 */
    expandedKeys?: string[] | never;
    children?: React.ReactNode | React.ReactNode[];
    data: TreeData[]
}