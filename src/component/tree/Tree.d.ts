import React from 'react';

export interface TreeData {
    title?: string,
    key: string,
    isLeaf?: boolean,
    children: any[]
}

export interface TreeNodeProps {
    data: TreeData[]
}

export interface TreeProps {
    /** （受控）展开指定的树节点 */
    expandedKeys?: string[];
    data: TreeData[]
}