import React from 'react'

function Filter() {
  return (
    <div className='filter'>
        <div className="result">
            number of products: 6
        </div>
        <div className="sort">
            <div className="sort-title"> sort on </div>
            <div className="form-checkbox">
                <div className="form-group">
                    <input type="radio"/>
                    <label htmlFor=''> recent products </label>
                </div>
                <div className="form-group">
                    <input type="radio"/>
                    <label htmlFor=''> oldest products </label>
                </div>
            </div>
        </div>
        <div className="brand">
               Brands
            <select>
                <option value="">All</option>
                <option value="">Samsung</option>
                <option value="">Iphone</option>
                <option value="">Motorolla</option>
                <option value="">Blackberry</option>
                <option value="">LG</option>
                <option value="">Sony</option>
            </select>
        </div>
      
    </div>
  )
}

export default Filter
