import React, {Component} from 'react';
import {TreeProps} from './Tree';
import TreeNode from './TreeNode'

const ExpandedKeyContext = React.createContext([]);

class Tree extends Component<TreeProps> {
    render() {
        let {data, expandedKeys} = this.props;

        return (
            // @ts-ignore
            <ExpandedKeyContext.Provider value={expandedKeys}>
                <div>
                    <TreeNode data={data}/>
                </div>
            </ExpandedKeyContext.Provider>

        );
    }
}

export default Tree;