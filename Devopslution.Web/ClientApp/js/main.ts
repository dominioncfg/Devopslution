import TechPage from './Pages/techPage'
import TechnologyPage from './Pages/techPage';
async function DocReady()
{
    let techPage = new TechnologyPage();
    techPage.run();
}
document.addEventListener("DOMContentLoaded",DocReady);
