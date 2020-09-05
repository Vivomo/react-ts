import React, {Component} from 'react';
import {TreeData, TreeProps} from './Tree';
import TreeNode from './TreeNode'

import ExpandedKeyContext from './context';

import './style.css';

class Tree extends Component<TreeProps, any> {

    constructor(props:TreeProps) {
        super(props);
        let {data, expandedKeys} = this.props;
        this.state = {
            expandedKeys: expandedKeys || [],
            data
        }
    }

    toggleFolder = (key:string) => {
        let expandedKeys = this.state.expandedKeys;
        let index = expandedKeys.indexOf(key);
        if (index === -1) {
            expandedKeys.push(key);
        } else {
            expandedKeys.splice(index, 1);
        }
        this.setState({
            expandedKeys: [...expandedKeys]
        })
    };

    sort = (event:React.SyntheticEvent) => {

        // @ts-ignore
        switch (event.target.value) {
            case "1":
                this.reSort(this.state.data, 'creatTime', 1);
                break;
            case "2":
                this.reSort(this.state.data, 'creatTime', -1);
                break;
            case "3":
                this.reSort(this.state.data, 'updateTime', 1);
                break;
            case "4":
                this.reSort(this.state.data, 'updateTime', -1);
                break;
            default:
        }
        this.setState({
            data: [...this.state.data]
        })
    }

    reSort = (data: TreeData[], key:string, order:number) => {
        data.sort((a:any, b:any) => (a[key] - b[key]) * order);
        data.forEach((item) => {
            if (item.children) {
                this.reSort(item.children, key, order)
            }
        })
    };

    render() {
        let {data} = this.props;
        return (
            <div>
                <span>排序</span>
                <select name="" id="" onChange={this.sort}>
                    <option value="1">创建时间正序</option>
                    <option value="2">创建时间倒序</option>
                    <option value="3">更新时间正序</option>
                    <option value="4">更新时间倒序</option>
                </select>

                <ExpandedKeyContext.Provider value={{
                    keys: this.state.expandedKeys,
                    cb: this.toggleFolder
                }}>
                    <TreeNode data={data}/>
                </ExpandedKeyContext.Provider>
            </div>

        );
    }
}

export default Tree;