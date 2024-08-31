

const vidlist = [
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/16/VideoID-TvcKY4qG/0Havvt/aTHPOV/drIsI8/MTRnO4/480?name=stree-2-sarkate-ka-aatank_480&token=ip=27.147.200.185~st=1725093841~exp=1725108241~acl=/*~hmac=63965989bc83811b0605170e7ea84f0fa0f83ec41d42a87457151ccfa20795e8&source=195',
        title: 'Stree 2: Sarkate Ka Aatank '
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/4/VideoID-bIjz1VDu/0l9riL/LkWOFc/FoItH8/nT0rJ4/480?name=stree-sub-eng_480&token=ip=27.147.200.185~st=1725094012~exp=1725108412~acl=/*~hmac=d251dda1c4dc55afe46e8aa32611a76f9b4ecc6a79b1ec90f70257b75fa220f6&source=195',
        title: 'Stree [Sub: Eng] '
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/3/VideoID-LIbWAhbH/0Q4mTL/UPBKgd/esASC8/ZC1N34/480?name=the-house-bunny_480&token=ip=27.147.200.185~st=1725080086~exp=1725094486~acl=/*~hmac=8bfdbb029f59be140b148f1a74747bb2023f14923e3b9f419611960b727f2dc6&source=195',
        title: 'The House Bunny'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/1/VideoID-MPbCAhf8/0R5ieG/aINuLJ/EZTjP8/VwFsg4/480?name=kabir-singh-sub-eng_480&token=ip=27.147.200.185~st=1725094086~exp=1725108486~acl=/*~hmac=c30bb875aa0dfbee8553f16f0c69b7dc40bf4897440528a54c3125827f1fe783&source=195',
        title: 'Kabir Singh'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/12/VideoID-wJQBHn9d/0upQJW/na0VpW/ymAUs8/DsNmg4/480?name=padmaavat-audio-hindi_480&token=ip=27.147.200.185~st=1725094150~exp=1725108550~acl=/*~hmac=f87a39f1e6957f59bbd420d4f2b8cb65559bcf19bae4731ba9ad612587134162&source=195',
        title: 'Padmaavat'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/5/VideoID-h2eybNgC/0FhowQ/hXmAcS/WZ9tR8/Mc0RM4/480?name=bajrangi-bhaijaan_480&token=ip=27.147.200.185~st=1725094203~exp=1725108603~acl=/*~hmac=7876ce857234969961f7ded10b9d356942a8340b6fca2757216cb575f2e168df&source=195',
        title: 'Bajrangi Bhaijaan'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/3/VideoID-MUJpKoIO/0BoUzr/rzMlGF/qNKln8/GgKyo4/480?name=pk_480&token=ip=27.147.200.185~st=1725094306~exp=1725108706~acl=/*~hmac=1dbe49900b792fb6aea254085ab7ff0fd88ea18e3879266b6f6275b09cbec8e4&source=195',
        title: 'PK'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/4/VideoID-NijVrhla/0QgWSI/JoWXHc/cdke28/LgEKm4/480?name=chennai-express_480&token=ip=27.147.200.185~st=1725094364~exp=1725108764~acl=/*~hmac=17e4e35893c4d1f22b2922f55824b489a354bb57b0b522ff00a9ae562286f57c&source=195',
        title: 'Chennai Express'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/15/VideoID-KGhOLe7n/0P2Z8e/HxgNZX/bZwCe8/cWWfu4/480?name=crew-2024_480&token=ip=27.147.200.185~st=1725094471~exp=1725108871~acl=/*~hmac=381a49b80c8672d2bcfa163c9814ca347587618a06f771ff90c97f9189f957e0&source=195',
        title: 'Crew'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/16/VideoID-P2GwZwZq/0tabLn/kGXH9B/WeCvT8/vxPbt4/480?name=inside-out-2_480&token=ip=27.147.200.185~st=1725094508~exp=1725108908~acl=/*~hmac=63264a0e2a85d2387abeeae723aa9828807e195e0127b485c70c46fc31bb991f&source=195',
        title: 'Inside Out 2'
    },
    {
        video:'https://stream-1-1-ip4.loadshare.org/slice/16/VideoID-hvKL7Jni/0oPVki/LM0ofs/NuzpL8/XrdVG4/480?name=deadpool-and-wolverine_480&token=ip=27.147.200.185~st=1725094559~exp=1725108959~acl=/*~hmac=4abfe89f6536ba53cc1784afcb36b473d7d5ac57771e821a699a7d6585e822cb&source=195',
        title: 'Deadpool And Wolverine'
    },
]

const playlist= [...new Set(vidlist.map((item)=>{
    return item
}))]


document.getElementById('list-play').innerHTML=playlist.map((item)=>{
    var {video,title}=item

    return(
        " <div class='list'>"+
        " <video class='list-video' src='"+video+"' >"+" </video>"+
        " <h5 class='list-title'>"+title+" </h5>"+

        "</div>"
    )
}).join('')


let listPlay = document.querySelectorAll('.list-play .list')

console.log(listPlay.length+' count')


listPlay.forEach(playl=>{
    playl.onclick=()=>{

        listPlay.forEach(remove=>{
            remove.classList.remove('active')
        })

        playl.classList.add('active')
        let playl_src=playl.querySelector('.list-video').src
        console.log('playl_src'+playl_src)
        document.querySelector('.main-video').src = playl_src
        document.querySelector('.main-video').play()

        let playl_title=playl.querySelector('.list-title').innerText
        console.log('playl_title'+playl_title)
        document.querySelector('.main-title').innerText = playl_title
    }
})

