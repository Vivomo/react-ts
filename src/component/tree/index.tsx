import React, {Component} from 'react';
import {TreeProps} from './Tree';
import TreeNode from './TreeNode'

import ExpandedKeyContext from './context';

import './style.css';

class Tree extends Component<TreeProps, any> {

    constructor(props:TreeProps) {
        super(props);
        let { expandedKeys} = this.props;
        this.state = {
            expandedKeys: expandedKeys || [],
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

    render() {
        let {data} = this.props;
        return (
            <ExpandedKeyContext.Provider value={{
                // @ts-ignore
                keys: this.state.expandedKeys,
                // @ts-ignore
                cb: this.toggleFolder
            }}>
                <TreeNode data={data}/>
            </ExpandedKeyContext.Provider>

        );
    }
}

export default Tree;