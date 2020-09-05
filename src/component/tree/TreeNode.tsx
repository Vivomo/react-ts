import React from 'react';
import {TreeNodeProps} from './Tree';

import ExpandedKeyContext from './context';

class TreeNode extends React.Component<TreeNodeProps, any> {


    render() {
        let {data} = this.props;

        return (
            <div className="tree-wrap">

                <ExpandedKeyContext.Consumer>
                    {
                        // @ts-ignore
                        ({keys, cb}) => data.map((item) => {
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
                                    <div className="tree-title-wrap" onClick={() => {
                                        if (!item.isLeaf) {
                                            cb(item.key);
                                        }
                                    }}>
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
            </div>

        );
    }
}



export default TreeNode;