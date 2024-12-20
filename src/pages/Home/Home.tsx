import React, { useState, FormEvent } from 'react'
import { Activity, Codesandbox, GitHub, Linkedin, ShoppingCart, Twitter } from 'react-feather'

const Home = () => {
    const [toastMessage, setToastMessage] = useState<string | null>(null)
    const [isToastSuccess, setIsToastSuccess] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalImageSrc, setModalImageSrc] = useState('')

    const handleDownloadCV = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        window.open('pdfs/meucurriculo.pdf', '_blank')
    }

    const showToast = (message: string, isSuccess = true) => {
        setToastMessage(message)
        setIsToastSuccess(isSuccess)
        setTimeout(() => {
            setToastMessage(null)
        }, 3000)
    }

    const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        showToast('Enviando sua mensagem...', true)

        try {
            const response = await fetch(e.currentTarget.action, {
                method: 'POST',
                body: new FormData(e.currentTarget),
            })

            if (response.ok) {
                showToast('Mensagem enviada com sucesso!', true)
                e.currentTarget.reset()
            } else {
                showToast('Houve um erro ao enviar sua mensagem. Tente novamente.', false)
            }
        } catch (error) {
            console.log(error)
        } finally {
            showToast('Mensagem enviada com sucesso!', true)   
        }
    }

    const openModal = (imageSrc: string) => {
        setModalImageSrc(imageSrc)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="bg-gray-50 text-gray-800">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <nav className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <img src="images/logovhs4.png" alt="Logo Victor Hugo" className="h-10" />
                    <button onClick={handleDownloadCV}
                        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Baixar Currículo
                    </button>
                </nav>
            </header>

            <main className="pt-20">
                <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="container max-w-7xl mx-auto px-4">
                        <div className="text-center">
                            <div className="mb-8 relative inline-block">
                                <img src="images/Minha foto.jpeg" alt="Victor Hugo" className="w-40 h-40 rounded-full border-4 border-white shadow-lg" />
                                <div className="absolute bottom-0 right-0 bg-green-400 w-6 h-6 rounded-full border-4 border-white"></div>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Victor Hugo</h1>
                            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">Desenvolvedor Front-end</h2>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                                Especialista em criação de landing pages, e-commerce e sistemas empresariais.<br />
                                <span className="font-semibold">Certificado pela NASA, USP, AWS e premiado pela Agência Espacial Brasileira</span>
                            </p>
                            <a href="https://api.whatsapp.com/send/?phone=%2B5522999018809&text=Ol%C3%A1%2C+vim+pelo+seu+site+Victor+gostaria+de+contratar+os+seus+serviços&type=phone_number&app_absent=0"
                                target="_blank"
                                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Me contrate
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white" id="servicos">
                    <div className="container max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Meus Serviços</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <Activity className="text-blue-600 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Páginas de alta conversão</h3>
                                <p className="text-gray-600">Especialista em criação de páginas que convertem visitantes em clientes, com design atraente e otimizado para resultados.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Codesandbox className="text-green-600 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Sistemas empresariais</h3>
                                <p className="text-gray-600">Desenvolvimento de sistemas sob medida para empresas, incluindo ERP, análise de fraudes e soluções personalizadas.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <ShoppingCart className="text-purple-600 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">E-commerce</h3>
                                <p className="text-gray-600">Criação de lojas online robustas e intuitivas, utilizando plataformas como Shopify, NuvemShop, WordPress ou desenvolvimento personalizado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-100" id="portfolio">
                    <div className="container max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Portfólio</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                                <img src="images/Dashboard.png" alt="Sistema de análise de fraudes" className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">Sistema de análise de fraudes</h3>
                                    <p className="text-gray-600 mb-4">Desenvolvimento de um sistema de análise de fraudes utilizando inteligência artificial.</p>
                                    <a href="#" className="text-blue-600 font-medium hover:underline" onClick={(e) => { e.preventDefault(); openModal("images/Dashboard.png"); }}>Ver mais</a>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                                <img src="images/Landing page peixaria.png" alt="Landing page de peixaria" className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">Landing page de peixaria</h3>
                                    <p className="text-gray-600 mb-4">Desenvolvimento de uma landing page de alta conversão para uma peixaria local.</p>
                                    <a href="#" className="text-blue-600 font-medium hover:underline" onClick={(e) => { e.preventDefault(); openModal("images/Landing page peixaria.png"); }}>Ver mais</a>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                                <img src="images/erp.png" alt="Projeto acadêmico Ifood" className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">Projeto acadêmico Ifood</h3>
                                    <p className="text-gray-600 mb-4">Liderança no desenvolvimento de um sistema de gestão de restaurantes para o Ifood.</p>
                                    <a href="#" className="text-blue-600 font-medium hover:underline" onClick={(e) => { e.preventDefault(); openModal("images/erp.png"); }}>Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {isModalOpen && (
                    <div id="projectModal" className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" onClick={closeModal}>
                        <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
                            <span className="absolute top-4 right-4 text-white text-4xl cursor-pointer" onClick={closeModal}>&times;</span>
                            <img className="max-w-full max-h-[90vh] object-contain" src={modalImageSrc} alt="Project" />
                        </div>
                    </div>
                )}

                <section className="py-20 bg-white" id="aws-badges">
                    <div className="container max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                            Minhas Badges AWS
                        </h2>
                        <div className="flex flex-wrap justify-center gap-12">
                            <div className="flex flex-col items-center">
                                <img
                                    src="images/awsrestart.png"
                                    alt="AWS Badge Restart"
                                    className="w-48 h-auto object-contain transition duration-300 ease-in-out transform hover:scale-105"
                                />
                                <h4 className="text-center font-semibold mt-4 text-lg">AWS Badge Restart</h4>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="images/awspractitioner.png"
                                    alt="AWS Badge Practitioner"
                                    className="w-48 h-auto object-contain transition duration-300 ease-in-out transform hover:scale-105"
                                />
                                <h4 className="text-center font-semibold mt-4 text-lg">AWS Badge Practitioner</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-100" id="formacao-academica">
                    <div className="container max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Formação Acadêmica</h2>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-3xl font-semibold mb-4">FIAP</h3>
                            <p className="text-xl mb-4">Curso Superior de Tecnologia (CST), Análise e desenvolvimento de sistemas - Full Stack, Apps & Artificial Intelligence</p>
                            <p className="text-gray-600 mb-6">fev de 2024 - dez de 2025</p>
                            <h4 className="text-2xl font-semibold mb-4">Atividades e grupos:</h4>
                            <ul className="list-disc list-inside mb-6 text-gray-700">
                                <li className="mb-2">Liderei um grupo no desenvolvimento de projeto no MID (FIAP + Oracle) - Uma rede social para investidores</li>
                                <li className="mb-2">Liderei um grupo no desenvolvimento do Icare Finance projeto para o Ifood, um ERP</li>
                            </ul>
                            <h4 className="text-2xl font-semibold mb-4">Aprendizados:</h4>
                            <p className="text-gray-700">Python, Figma, SQL, Modelagem de dados, Banco de dados, React, JavaScript, Java, Bootstrap</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50" id="contato">
                    <div className="container max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Entre em Contato</h2>
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                            <form id="contactForm" action="https://formsubmit.co/contatovhs4@gmail.com" method="POST" onSubmit={handleContactSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                                    <input type="text" id="name" name="name" required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                                    <input type="email" id="email" name="email" required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                                    <textarea id="message" name="message" rows={4} required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"></textarea>
                                </div>
                                <input type="hidden" name="_next" value="#" />
                                <input type="hidden" name="_subject" value="Nova mensagem de contato" />
                                <input type="text" name="_honey" style={{ display: 'none' }} />
                                <input type="hidden" name="_captcha" value="false" />
                                <button type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-12">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0 text-center md:text-left">
                            <img src="images/logovhs4.png" alt="Logo Victor Hugo" className="h-12 mb-4 mx-auto md:mx-0" />
                            <p className="text-sm">&copy; 2024 Victor Hugo. Todos os direitos reservados.</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://github.com/vhs4" target="_blank" rel="noopener noreferrer"
                                className="hover:text-blue-400 transition duration-300">
                                <GitHub className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/vhs4" target="_blank" rel="noopener noreferrer"
                                className="hover:text-blue-400 transition duration-300">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/vhs4dev" target="_blank" rel="noopener noreferrer"
                                className="hover:text-blue-400 transition duration-300">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {toastMessage && (
                <div
                    className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full ${isToastSuccess ? 'bg-green-500' : 'bg-red-500'
                        } text-white z-50 shadow-lg transition-opacity duration-300 ease-in-out`}
                >
                    {toastMessage}
                </div>
            )}
        </div>
    )
}

export default Home

