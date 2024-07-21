"use client";

import styles from "app/sass/global-error.module.sass";
import Image from "next/image";

export default function GlobalError(props: ErrorProps) {
  const { reset } = props;
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>An error has ocurred</h1>
      <Image src="/images/error.png" alt="Error" width={500} height={500} />
      <p className={styles.Error__message}>
        Al parecer ha ocurrido un error, pero no te sientas mal ;)
      </p>
      <button className={styles.Error__button} onClick={reset}>
        Volver a intentar
      </button>
    </main>
  );
}
