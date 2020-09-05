import React, {Component} from 'react';
import {TreeProps} from './Tree';
import TreeNode from './TreeNode'

import ExpandedKeyContext from './context';

import './style.css';

class Tree extends Component<TreeProps, any> {
    render() {
        let {data, expandedKeys} = this.props;
        return (
            // @ts-ignore
            <ExpandedKeyContext.Provider value={expandedKeys || []}>
                <TreeNode data={data}/>
            </ExpandedKeyContext.Provider>

        );
    }
}

export default Tree;