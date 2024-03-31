import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import InputFilter from '../../../components/InputFilter/InputFilter'
export default function CategoryFilter({ options }) {
  return (
    <Disclosure as='div' className='border-t border-gray-200 px-4 py-6'>
      {({ open }) => (
        <>
          <h3 className='-mx-2 -my-3 flow-root'>
            <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
              <span className='font-medium text-gray-900'>Category</span>
              <span className='ml-6 flex items-center'>
                {open ? (
                  <MinusIcon className='h-5 w-5' aria-hidden='true' />
                ) : (
                  <PlusIcon className='h-5 w-5' aria-hidden='true' />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className='pt-6'>
            <div className='space-y-2'>
              {options.map((option, optionIdx) => (
                <div key={option.value} className='flex items-center'>
                  <InputFilter id={optionIdx} value={option.value} label={option.label} checked={option.checked} />
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
