// Globals
let repos = [];
const repoList = document.querySelector('.repo-list');

const getRepos = async (page = 1) => {
    const res = await fetch(
        `https://api.github.com/users/liambsulliva/repos?&sort=pushed&per_page=100&page=${page}`
    );
    const data = await res.json();
    //Check if there are any repos left to fetch
    if (data.length > 0) {
        repos = repos.concat(data);
        return getRepos(page + 1); // if yes, call function recursively to grab next
    } else {
        displayRepos(repos);
        return repos;
    }
};
getRepos();

//! InnerHTML is potentially unsafe, refactor
const displayRepos = (repos) => {
    const githubAddress = `https://github.com/liambsulliva`;
    for (const repo of repos) {

        //* Skip over forks, this is intended behavior
        // Displaying website on the website is redundant
        if (repo.fork || repo.name === 'personal-website' || repo.name === 'liambsulliva') {
            continue;
        }

        // Prepare new li
        let listItem = document.createElement('li');
        listItem.classList.add('repo');
        listItem.innerHTML = `
            <h3>${repo.name}</h3>
            <span>${repo.description}</span>`;

        // Check for Live Website, if not don't list
        if (repo.homepage && repo.homepage !== '') {
            listItem.innerHTML += `<br /> <br />
            <a class="link-btn" href=${repo.html_url} target="_blank">View Project</a> <br /> <br />
            <a class="link-btn" href=${repo.homepage} target="_blank">Live Preview</a> <br />`;
        } else {
            listItem.innerHTML += `<br /> <br />
            <a class="link-btn" href=${repo.html_url} target="_blank">View Project</a> <br />`;
        }

        // Finally attach to parent to display in DOM
        repoList.append(listItem);
    }
};