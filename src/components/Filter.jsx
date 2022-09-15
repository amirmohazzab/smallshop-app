import React from 'react'

function Filter(props) {
    console.log(props);
  return (
    <div className='filter'>
        <div className="result">
            number of products: {props.count}
        </div>
        <div className="sort">
            <div className="sort-title"> sort on </div>
            <div className="form-checkbox">
                <div className="form-group">
                    <input type="radio" value="asc" name="radiovalues" onChange={props.sortProducts} />
                    <label htmlFor=''> recent products </label>
                </div>
                <div className="form-group">
                    <input type="radio" value="desc" name="radiovalues" onChange={props.sortProducts} />
                    <label htmlFor=''> oldest products </label>
                </div>
            </div>
        </div>
        <div className="brand">
               Brands
            <select value={props.brand} onChange={props.filterProducts}>
                <option value="">All</option>
                <option value="samsung">Samsung</option>
                <option value="iphone">Iphone</option>
                <option value="motorolla">Motorolla</option>
                <option value="blackberry">Blackberry</option>
                <option value="lg">LG</option>
                <option value="sony">Sony</option>
            </select>
        </div>
      
    </div>
  )
}

export default Filter
