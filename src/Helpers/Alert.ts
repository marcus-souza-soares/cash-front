import Swal from 'sweetalert2';

interface Props {
  type: 'warning' | 'error' | 'success';
  title: string;
  text: string;
}

export const alert = ({type, title, text}: Props) => {
  return Swal.fire({
    icon: type,
    title: title,
    text: text,
  });
};
