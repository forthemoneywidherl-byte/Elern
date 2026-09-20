const ADMIN_WA="6281234567890"; // GANTI dengan nomor WhatsApp admin, tanpa tanda + atau spasi
const packages=[
 {id:"basic",icon:"📄",name:"CV Basic",tag:"HEMAT",price:35000,desc:"CV rapi untuk kebutuhan lamaran kerja sehari-hari.",features:["Desain modern","1 halaman CV","Format PDF","1x revisi"]},
 {id:"ats",icon:"🎯",name:"CV ATS",tag:"POPULER",price:55000,desc:"Format CV yang disusun agar lebih mudah dibaca sistem ATS.",features:["Desain ATS-friendly","Struktur profesional","Format PDF","2x revisi"]},
 {id:"premium",icon:"✨",name:"CV Premium",tag:"PRO",price:85000,desc:"Paket lengkap dengan desain premium dan penyusunan konten.",features:["Desain premium","Optimasi isi CV","Format PDF","3x revisi","Surat lamaran"]},
 {id:"bundle",icon:"💼",name:"CV + Surat Lamaran",tag:"BUNDLE",price:100000,desc:"CV profesional sekaligus surat lamaran yang selaras.",features:["CV profesional","Surat lamaran","Desain senada","Format PDF","3x revisi"]}
];
function money(n){return "Rp"+new Intl.NumberFormat("id-ID").format(n)}
function choosePackage(id){localStorage.setItem("cv_package",id);location.href="form.html?id="+id}
function sendWhatsApp(o,p){
 const msg=`Halo Admin CVKita 👋%0A%0ASaya ingin memesan jasa pembuatan CV.%0A%0A📦 Paket: ${p.name}%0A💰 Harga: ${money(p.price)}%0A👤 Nama: ${o.name}%0A📱 WhatsApp: ${o.phone}%0A🎯 Target pekerjaan: ${o.job}%0A🎓 Pendidikan: ${o.education}%0A💼 Pengalaman: ${o.experience}%0A🛠️ Skill: ${o.skills}%0A📝 Tentang diri: ${o.about||"-"}%0A📌 Catatan: ${o.notes||"-"}`;
 window.open("https://wa.me/"+ADMIN_WA+"?text="+msg,"_blank");
}
function contactAdmin(){window.open("https://wa.me/"+ADMIN_WA+"?text=Halo%20Admin%20CVKita,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20CV.","_blank")}
const packageBox=document.getElementById("packages");
if(packageBox) packageBox.innerHTML=packages.map(p=>`<article class="package ${p.id==="ats"?"popular":""}">
<div class="package-top"><div><h3>${p.icon} ${p.name}</h3><span class="tag">${p.tag}</span></div><strong>${money(p.price)}</strong></div>
<p>${p.desc}</p><ul>${p.features.map(f=>`<li>${f}</li>`).join("")}</ul>
<a class="btn primary" href="detail.html?id=${p.id}">Lihat Paket</a></article>`).join("");
