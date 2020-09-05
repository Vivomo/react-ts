import React from 'react';
import {TreeNodeProps} from './Tree';

const TreeNode = (props: TreeNodeProps) => {

    let {data} = props;

    return (
        <div>
            {
                data.map((item) => (
                    <div key={item.key}>
                        <div className="tree-title-wrap">
                            <span className={`tree-item-icon`}/>
                            <span>{item.title}</span>
                        </div>
                        {

                        }
                    </div>
                ))
            }
        </div>
    );

};



export default TreeNode;