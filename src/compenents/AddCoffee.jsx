import React from 'react';

const AddCoffee = () => {
   const handleAddCoffee = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const newCoffee = {name, quantity, supplier, taste, category, details, photo};
      console.log(newCoffee);

      
   }

   return (
      <div className='container mx-auto'>
         <div className='bg-[#F4F3F0] p-24'>
            <div className='text-center'>
               <h2 className='text-3xl mb-3'>Add Coffee</h2>
               <p className=''>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
            </div>
            <div className='py-5'>
               <form onSubmit={handleAddCoffee}>

                  <div className='md:flex gap-4 mb-6'>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                           <input name='name' type="text" placeholder="Enter coffee name" className=" input rounded w-full" />
                        </label>
                     </div>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                           <span className="label-text">Avilable Quantity </span>
                        </label>
                        <label className="input-group">
                           <input name='quantity' type="text" placeholder="Avilable Quantity" className="input  w-full" />
                        </label>
                     </div>
                  </div>

                  <div className='md:flex gap-4 mb-6'>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                           <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                           <input name='supplier' type="text" placeholder="Enter coffee supplier" className=" input rounded w-full" />
                        </label>
                     </div>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                           <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                           <input name='taste' type="text" placeholder="Enter coffee taste" className="input  w-full" />
                        </label>
                     </div>
                  </div>

                  <div className='md:flex gap-4 mb-6'>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                           <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                           <input name='category' type="text" placeholder="Enter coffee category" className=" input rounded w-full" />
                        </label>
                     </div>
                     <div className="form-control md:w-1/2">
                        <label className="label">
                           <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                           <input name='details' type="text" placeholder="Enter coffee details" className="input  w-full" />
                        </label>
                     </div>
                  </div>

                  <div className="form-control md:w-full">
                     <label className="label">
                        <span className="label-text">Photo URL</span>
                     </label>
                     <label className="input-group">
                        <input name='photo' type="text" placeholder="Enter photo URL" className="input  w-full" />
                     </label>
                  </div>

                  <div className='mt-6 text-center bg-[#F4F3F0] '>
                     <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C]  w-1/2 mx-auto" />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddCoffee;