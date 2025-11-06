import { Notify } from 'quasar'

export const notificarErro = (msg, error = null) => {

  let erro = 'Excepción detectada';

  if (error && typeof error === 'object') {
    erro = error?.data?.error || 
           error?.data?.msg || 
           error?.data?.message || 
           error?.response?.data?.error || 
           'No detectada';
  }
  let message = '';

  console.log(error)
  if (error) {
    message = `
      <p class="text-bold">
        ${'Excepción detectada: Consulta el registro de Chrome para obtener más información.'}
      </p>
    `;
  } else {
    message = `
      <p class="text-bold">
        <span class="text-bold">${erro}</span>
      </p>
    `;
  }

  Notify.create({
    type: 'positive',
    progress: true,
    position: 'top',
    timeout: 1500,
    message,
    actions: [{
      icon: 'close',
      round: true,
      color: 'white'
    }],
    html: true
  })
  // throw new Error(message)
}

export const notificarSucesso = (msg) => {
  const message = `Todo correcto.... <br>${msg}.`
  Notify.create({
    type: 'positive',
    progress: true,
    position: 'top',
    message,
    timeout: 500,
    actions: [{
      icon: 'close',
      round: true,
      color: 'white'
    }],
    html: true
  })
}
