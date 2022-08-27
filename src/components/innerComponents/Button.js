import React from 'react'

export default function Button({ page, setPage, text, incr, totalPages}) {
    return (
        <button 
            data-testid='button'
            type="button" 
            className={"btn btn-success " + ((page===1 && incr===-1) || (page===totalPages && incr===1) ? "disabled" : null) } 
            onClick={() => setPage(prev => prev + incr)}> {text}
        </button>
    )
}
