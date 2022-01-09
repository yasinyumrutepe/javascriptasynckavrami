const postlar = [
    { baslik: 'Başlık1',konu:'Konu 1',icerik:'içerikiçerikiçerik',yazar: 'Yazar1' },
    { baslik: 'Başlık2',konu:'Konu 2',icerik:'içerikiçerikiçerik',yazar: 'Yazar2' },
    { baslik: 'Başlık3',konu:'Konu 3',icerik:'içerikiçerikiçerik',yazar: 'Yazar3' },
];

const postListele = () => {
    postlar.map(postlar => {
        console.log(postlar.baslik,postlar.konu,postlar.icerik,postlar.yazar);
    })
};

const postEkle = (yeniPost) => {

    const promise1 = new Promise((resolve, reject) => {
        postlar.push(yeniPost);
       resolve(postlar);
        reject('Bir Hata Oluştu');

    })
    return promise1
};

async function postGoster(){
    try{
        await postEkle({baslik: 'Başlık4',konu:'Konu 4',icerik:'içerikiçerikiçerik',yazar: 'Yazar4'})
    postListele();
    }catch(error){
        console.log(error)
    }
}
postGoster()