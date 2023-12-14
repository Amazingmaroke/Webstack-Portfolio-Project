import React from 'react';
import { ButtonGroup, Button } from "@material-tailwind/react";

import { TERipple } from 'tw-elements-react';

export default function Tableview() {
  return (
    <div className="flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-4">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">First</th>
                  <th scope="col" className="px-6 py-4">Last</th>
                  <th scope="col" className="px-6 py-4">Handle</th>
                  <th scope="col" className="px-6 py-4 ">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-blue-600 dark:border-neutral-500 dark:hover:bg-blue-100">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td ><ButtonGroup size='md' ripple={true} className='gap-4'>
      <Button className='bg-blue-800 flex w-max flex-col gap-4'>Edit</Button>
      <Button className='bg-red-800 flex w-max flex-col gap-4'>Delete</Button>
      
    </ButtonGroup></td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-blue-600 dark:border-neutral-500 dark:hover:bg-blue-100">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                  <td ><ButtonGroup size='md' ripple={true} className='gap-4'>
      <Button className='bg-blue-800 flex w-max flex-col gap-4'>Edit</Button>
      <Button className='bg-red-800 flex w-max flex-col gap-4'>Delete</Button>
      
    </ButtonGroup></td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-blue-600 dark:border-neutral-500 dark:hover:bg-blue-100">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  <td className="whitespace-nowrap px-6 py-4">Wild</td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  <td > <ButtonGroup size='md' ripple={true} className='gap-4'>
      <Button className='bg-blue-800 flex w-max flex-col gap-4'>Edit</Button>
      <Button className='bg-red-800 flex w-max flex-col gap-4'>Delete</Button>
      
    </ButtonGroup></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
