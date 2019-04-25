import nailPalace from '../images/nailpalace.png';
import slidingPuzzleAI from '../images/sliding-puzzle-ai.png';
import nQueenProblemAI from '../images/n-queen-problem-ai.png';
import cat from '../images/cat.png';

export default [
    {
        title: 'Nail Salon Website',
        description: 'Overhauled a nail salon\'s website with a completely new design and layout. It features a single page content layout with sections scrollable to with the navbar, and maintains a responsive design in all viewports.',
        skills: ['HTML5','CSS3','JavaScript','ES6','ReactJS', 'S3', 'Route 53', 'Cloudfront'],
        image: nailPalace,
        imageAlt: 'flower picture',
        launchable: true,
        links: {
            launch: 'https://www.nailpalacescv.com',
            github: 'https://github.com/mikechoi1/nail-palace-website'
        }
    },
    {
        title: 'Sliding Puzzle AI',
        description: 'This is an AI built using the A* search algorithm to solve the tricky sliding puzzle in the shortest number of moves possible. If the initial mixed-up state is solvable, the program will give the best solution',
        skills: ['Java'],
        image: slidingPuzzleAI,
        imageAlt: 'example of sliding puzzle program',
        launchable: false,
        links: {
            github: 'https://github.com/mikechoi1/sliding-puzzle-ai'
        }
    },
    {
        title: 'N Queen Problem AI',
        description: 'This is an AI built using simulated annealing and genetic algorithm to solve the N Queen Problem. The N Queen Problem is the question of how n queens can be arranged on a nxn chessboard such that none of the queens are attacking any other queen and this ai is what finds the solution to that problem.',
        skills: ['Java'],
        image: nQueenProblemAI,
        imageAlt: 'dog picture',
        launchable: false,
        links: {
            github: 'https://github.com/mikechoi1/n-queen-problem-ai'
        }
    }
]