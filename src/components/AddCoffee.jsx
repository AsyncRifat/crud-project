import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    //  send coffee data to the db
    fetch('https://coffee-store-server-mu-mocha.vercel.app/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Coffee added successfully!',
            icon: 'success',
            draggable: true,
          });
          console.log('After adding coffee to db:', data);
          form.reset();
        }
      });
  };

  return (
    <div className="px-24 py-7 bg-[#F4F3F0] mt-10 rounded-sm">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl rancho">Add New Coffee</h1>
        <p className="raleway">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset rounded-box p-2">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-2">
              <label className="label">Quantity</label>
              <input
                type="number"
                name="quantity"
                className="input w-full"
                placeholder="Enter coffee Quantity"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-2">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-2">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-2">
              <label className="label">Price</label>
              <input
                type="number"
                name="price"
                className="input w-full"
                placeholder="Price per cup"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-2">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset rounded-box my-6 px-2">
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter photo URL"
              />
            </fieldset>
          </div>
          <div className="px-2">
            <input
              type="submit"
              className="btn w-full rancho text-[#331A15] bg-[#D2B48C] text-2xl"
              value=" Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
