import Pic from './assets/peakpx.jpg'
function Head({title}){
    return  <h1>{title}</h1>
        
    ;  
}
function Title({word}){
    return <p>{word}</p>
    ;
}
function Contact({name,tag}){
    return (
        <div>
            <img src={Pic} alt="" />
            <div>
            <p>{name}</p>
            <p>{tag}</p>
            </div>
        </div>
    );
}
function Add(){
    return  (<form action="">
                <input type="text" name="" id="" placeholder="Nama"/>
                <input type="text" name="" id="" placeholder="Tag"/>
                <button></button>
            </form>
       
     ) ;
}
function ContactApp(){
    const datas = [
        {name: 'Jonkler',
        tag: 'brainrot'},
        {name: 'yuki',
            tag: 'brainrot'}
    ];
    return(
    <div>
        <Head title='Aplikasi kontak'/>
        <Title word = 'Tambah Kontak'/>
        <Add/>
        <Title word = 'Daftar Kontak'/>
        <Contact {...datas[0]}/>
    </div>
    );
}

export default ContactApp;