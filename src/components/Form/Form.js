import axios from "axios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { handleDonationForm } from "src/utils/handlePipefyForm";

function Form() {
  const router = useRouter();
  const donationInfos = handleDonationForm(router.query.id, "id");
  const [loading, setLoading] = useState(false);
  const nomeCompletoRef = useRef(null);
  const indicacaoRef = useRef(null);
  const valorRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nomeCompleto = nomeCompletoRef.current.value;
    const indicacao = indicacaoRef.current.value;
    const valor = valorRef.current.value;

    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/donors`, {
        nome: nomeCompleto,
        indicacao: indicacao,
        quantidade: valor,
      });
      setLoading(false);
      router.push(donationInfos?.link);
    } catch (error) {
      setLoading(false);
      alert("Houve um erro ao enviar o formulário, tente novamente!");
    }
  };

  return (
    <form
      className='border-2 border-gray-200 rounded-lg p-8 mx-auto w-1/2 bg-white'
      onSubmit={handleSubmit}
    >
      <label
        className='block mb-2 font-bold text-gray-700'
        htmlFor='nomeCompleto'
      >
        Qual seu nome (Nome Completo)?
      </label>
      <input
        ref={nomeCompletoRef}
        className='w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline'
        id='nomeCompleto'
        type='text'
        placeholder='Nome completo'
      />

      <label className='block mb-2 font-bold text-gray-700' htmlFor='indicacao'>
        Quem indicou (Nome Completo)?
      </label>
      <input
        ref={indicacaoRef}
        className='w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline'
        id='indicacao'
        type='text'
        placeholder='Indicação'
      />

      <label className='block mb-2 font-bold text-gray-700' htmlFor='valor'>
        Qual o valor?
      </label>
      <div className='relative'>
        <span className='absolute left-3 top-2 text-gray-700'>R$</span>
        <input
          ref={valorRef}
          defaultValue={donationInfos?.value}
          disabled
          className='w-full pl-8 pr-3 py-2 mb-4 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline'
          id='valor'
          type='text'
          placeholder='Valor'
        />
      </div>

      {loading ? (
        <button
          className='w-full px-4 py-2 font-bold text-white rounded bg-blue-700 focus:outline-none focus:shadow-outline'
          type='button'
          disabled
        >
          Enviando...
        </button>
      ) : (
        <button
          className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Enviar
        </button>
      )}
    </form>
  );
}

export default Form;
