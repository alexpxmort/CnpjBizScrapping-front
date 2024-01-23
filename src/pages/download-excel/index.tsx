/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line max-len
import Head from 'next/head';
import { useState } from 'react';

import LoadingSpinner from '@ui/components/Spinner';
import axios from 'axios';

import { BASE_URL, downloadExcelFromBase64 } from 'src/helpers/file';
import Link from 'next/link';

const DownloadExcel = () => {
  const [loading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const onSubmit = async () => {
    setSubmited(true);
    if (!selectedImage) {
      return;
    }
    setLoading(true);
    // Aqui você pode enviar os dados do formulário para o backend

    try {
      const data = new FormData();
      data.append('csvFile', selectedImage, selectedImage.name);
      const result = await axios.post(`${BASE_URL}/upload/45`, data);
      if (result?.data?.data && result?.data?.data?.length > 0) {
        downloadExcelFromBase64(result?.data?.data, `${selectedImage.name.split('.')?.[0]}.xlsx`);
      }
      setLoading(false);
      setSelectedImage(null);
      setSubmited(false);
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Cnpj Biz Scrapping - Download Planilha CnpjBiz</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Set padding on the body element for mobile spacing */}
      <div className="p-4">
        <Link href={'/'}>Casa de Dados</Link>
        <label
          htmlFor="uploadFile1"
          className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2.5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mr-2 fill-white inline" viewBox="0 0 32 32">
            <path
              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
              data-original="#000000"
            />
            <path
              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
              data-original="#000000"
            />
          </svg>
          Upload
          <input type="file" id="uploadFile1" className="hidden" onChange={handleImageChange} />
        </label>
        {!selectedImage && submited && (
          <p className="text-center  text-red-500 text-sm mt-5">{'O arquivo é obrigatório'}</p>
        )}

        {selectedImage && <div className="text-center mt-6">{selectedImage?.name}</div>}

        <div className="text-center flex items-center justify-center mt-20">
          <button
            onClick={onSubmit}
            disabled={loading}
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Enviar
          </button>
        </div>
        {loading && (
          <div className="mt-10">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </>
  );
};

export default DownloadExcel;
