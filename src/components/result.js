import React from 'react';

const Result = (props) => {
    const {duplicates, uniques} = props;
    const uniqueValues = uniques.join(", ");
    const duplicatevalues = duplicates.join(", ");
        return (
            <div>
                    <p>
                        <span className={"label"}>Uniques:</span>
                        <span>{uniqueValues ? uniqueValues : 0}</span>
                    </p>
                    <p>
                        <span className={"label"}>Duplicates: </span>
                        <span>{duplicatevalues ? duplicatevalues: 0}</span>
                     </p>
            </div>
        )
}

export default Result;