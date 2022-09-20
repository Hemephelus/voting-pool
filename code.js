const candidates = document.querySelectorAll('.candidate')
const next = document.querySelector('#next')
let allCandidates = 0
candidates.forEach(candidate => {
    candidate.addEventListener('click',function(){
        if(renderClick(candidate)){

            allCandidates++
        }else{
            allCandidates--

        }
       disableButton(allCandidates)
    })
});

function renderClick(candidate){
    if(candidate.classList.contains('bg-slate-100')){
        candidate.classList.add('bg-slate-300')
        candidate.classList.remove('bg-slate-100')
        return true
    }else{
        candidate.classList.add('bg-slate-100')
        candidate.classList.remove('bg-slate-300')
        return false
    }
}

function disableButton(allCandidates){
    if(allCandidates >= 4){
        next.classList.add('bg-red-200')
        next.classList.add('active:scale-95')
        next.classList.remove('bg-slate-100')
        return true
    }else{
        next.classList.add('bg-slate-100')
        next.classList.remove('bg-red-200')
        next.classList.remove('active:scale-95')
        return false
    }
}
