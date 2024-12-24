import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import useFetchMovies from '../../hooks/useFetchMovies';
import { RequestsForDetails } from '../../constants/Api';
import Search from './Search';

import "./Modal.scss";

function SearchModal({ open, setOpen }) {

    const ref = useRef(null);
    const [search, setSearch] = useState('');

    const { data } = useFetchMovies(search ? RequestsForDetails(search).RequestMultiSearch : null);


    const handleClickOutside = (event) => {

        if (event.target.id === 'headlessui-portal-root') {
            setOpen(false);
            setSearch('');
            console.log('true');
            
        }
    };

    useEffect(() => {
        if (open) {
            document.body.classList.add('active');
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside); // Dokunma olaylarını da dinle
        } else {
            document.body.classList.remove('active');
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside); // Dokunma olayını kaldır
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside); // Etkinlik temizliği
        };
    }, [open]);
    

    const handleChangle = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <Dialog ref={ref} open={open} onClose={() => { }} className="relative z-50">
                <div>
                    <DialogPanel
                    >
                        <DialogTitle>Searching Something</DialogTitle>

                        <div className="input-container">
                            <input
                                value={search}
                                onChange={handleChangle}
                                name="full_name"
                                type="text"
                                placeholder="Search Movie or Tv Shows"
                                className="border p-2 w-full"
                            />
                            <CiSearch className="search" size={22} />
                        </div>

                        <Search data={data} setOpen={setOpen} setSearch={setSearch} search={search} />
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}

export default SearchModal;
