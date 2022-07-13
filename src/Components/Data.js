import React from 'react'

const Data = () => {
  return (
    <div>
      <div className="datainput">
        <form>
          <div className="company">
            <label for="name" className="compname">company name</label>
            <input type="name" className="form-control" id="inputname" placeholder="e.g wolkswagon" />

          </div>
          <div className="industry">
            <label for="iname" className="iname">industry</label>
            <select className="form-select" aria-label="Default select example" id="dropdown">
              <option selected>select</option>
              <option value="1">Agricultural</option>
              <option value="2">software</option>
              <option value="3">chemical</option>
              <option value="4">commerce</option>
              <option value="5">Financial</option>
              <option value="6">Food</option>
              <option value="7">service based</option>
            </select>

            <label for="name" className="cosize">company size</label>
          </div>
          
          <div className="links">
            <li>
               <a href="/" className="btn" type="submit">1-20</a>
            </li>
            <li>
               <a href="/" className="btn" type="submit">21-50</a>
            </li>
            <li>
                <a href="/" className="btn" type="submit">51-200</a>
            </li>
            <li>
               <a href="/" className="btn" type="submit">201-500</a>
            </li>
            <li>
               <a href="/" className="btn" type="submit">500 +</a>
            </li>
          </div>

           <button className="submitbtn">Get Started</button>
        </form>
      </div>
    </div>
  )
}

export default Data