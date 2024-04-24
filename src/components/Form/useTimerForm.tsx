import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ITimerForm } from './types';

export const useTimerForm = () => {
  const schema = yup.object().shape({
    task: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, 'Não são permitidos números no campo de texto')
      .required('É necessário preencher a tarefa'),
    time: yup
      .string()
      .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, 'Não são permitidos números no campo de texto')
      .required('É necessário colocar um tempo de pelo menos 00:00:01')
  });

  return useForm<ITimerForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      task: '',
      time: '00:00:00'
    }
  });
};
