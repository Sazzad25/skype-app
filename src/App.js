import "./App.css";

function App() {
  return (
    <div className="top">
      <p className="text-red-500 font-semibold">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </p>
      <p className="mt-5 p1">
        Name:
        <input
          type="text"
          placeholder="Please type your name"
          className="input input-bordered input-success w-full max-w-xs input"
        />
      </p>
      {/*  */}
      <div className="p1 div1">
        <div>
          <p className="">Sectors:</p>
        </div>
        <div className="mt-5 div2">
          <select className="select select-success w-full max-w-xs">
            <option disabled selected>
              Select your favorite item
            </option>
            <option> Manufacturing</option>
            <option>Bakery & confectionery products</option>
            <option>Furniture</option>
            <option>Machinery</option>
            <option>Metal structures</option>
            <option>Metalworking</option>
            <option>Plastic and Rubber</option>
          </select>
        </div>
      </div>
      <div class="flex items-center p1">
        <input
          type="checkbox"
          id="myCheckbox"
          class="form-checkbox h-5 w-5 text-blue-500"
        />
        <label for="myCheckbox" class="ml-2 text-gray-700 check">
        Agree to terms
        </label>
      </div>
      <button className="btn btn-neutral p1 btn">Save</button>
    </div>
  );
}

export default App;
