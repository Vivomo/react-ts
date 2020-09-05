import React from 'react';
import {TreeNodeProps} from './Tree';

import ExpandedKeyContext from './context';

class TreeNode extends React.Component<TreeNodeProps, any> {

    // static contextType = ExpandedKeyContext;

    render() {
        let {data} = this.props;
        // let keys = this.context;

        return (
            <ExpandedKeyContext.Consumer>
                {
                    keys => data.map((item) => {
                        let className, isOpenFolder = false;
                        if (item.isLeaf) {
                            className = 'tree-file'
                        } else {
                            // @ts-ignore
                            isOpenFolder = keys.includes(item.key);
                            className = isOpenFolder ? 'tree-folder-open' : 'tree-folder-close';
                        }
                        return (
                            <div key={item.key}>
                                <div className="tree-title-wrap">
                                    <span className={`tree-item-icon ${className}`}/>
                                    <span>{item.title}</span>
                                </div>
                                {
                                    isOpenFolder ?
                                        <TreeNode data={item.children}/>
                                        :
                                        null
                                }
                            </div>
                        )
                    })
                }
            </ExpandedKeyContext.Consumer>
        );
    }
}



export default TreeNode;