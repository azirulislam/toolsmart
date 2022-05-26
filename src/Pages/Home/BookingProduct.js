import React from 'react';

const BookingProduct = ({ bookProduct}) => {
    const { name, price, order} = bookProduct;


    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">{name}</h3>
                    <p class="py-4">Single Product:  {price}</p>
                    <p class="">{order}</p>
                    <div>
                    <form>
                    <input type="text" placeholder="Your Name" class="input my-3 input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Your Email" class="input my-3 input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Contact Number" class="input my-3 input-bordered w-full max-w-xs" /> <br></br>
                    <input type="submit" value="Submit" class="btn my-3 w-64" />
                    </form>
                    </div>
                    
                </div>
            </div>
        </div >
    );
};

export default BookingProduct;