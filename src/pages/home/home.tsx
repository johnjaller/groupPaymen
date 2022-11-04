import { useForm } from 'react-hook-form';
import styles from './home.module.scss';

const Home = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <h1>Group payment</h1>
      <div className={styles.home}>
        <div className={styles.container}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div>Login</div>
            <input type="email" placeholder="Your email" {...register('email')} />
            <input type="password" placeholder="Your password" {...register('password')} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
