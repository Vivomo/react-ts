
export interface TreeData {
    title?: string,
    key: string,
    isLeaf?: boolean,
    creatTime: number,
    updateTime: number,
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