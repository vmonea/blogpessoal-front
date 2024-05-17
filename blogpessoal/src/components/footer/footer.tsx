// import React from 'react'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold font-display'>Blog pessoal | Copyright: Vitor Monea </p>
            <p className='text-lg font-display font-bold'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={36} weight='bold' />
              <InstagramLogo size={36} weight='bold' />
              <GithubLogo size={36} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer