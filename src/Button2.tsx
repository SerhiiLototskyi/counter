import React from 'react';


export function Button2(props: any) {
    return (
        <div>
            <button className="button"
                    onClick={props.reset}
                    disabled={props.disableReset}> Reset
            </button>
        </div>

    )
}