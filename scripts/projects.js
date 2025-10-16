const projects = [
  {
    name: 'Project 1',
    description: 'An Introduction about myself.',
    liveDemo: 'https://mufaro08.github.io/wdd231/',
    githubLink: 'https://mufaro08.github.io/wdd231/',
  },
  {
    name: 'Project 2',
    description: 'Harare City Chamber of Commerce website.',
    liveDemo: 'https://mufaro08.github.io/wdd231/chamber/',
    githubLink: 'https://mufaro08.github.io/wdd231/chamber/',
  },
  {
    name: 'Project 3',
    description: 'A short description of Project 3.',
    liveDemo: 'https://mufaro08.github.io/wdd231/project',
    githubLink: 'https://mufaro08.github.io/wdd231/project',
  },
  {
    name: 'Project 4',
    description: 'A rafting company website.',
    liveDemo: 'https://mufaro08.github.io/wdd130-wwr/',
    githubLink: 'https://mufaro08.github.io/wdd130-wwr/',
  },
  {
    name: 'Project 5',
    description: 'A dynamic website fundamentals.',
    liveDemo: 'https://mufaro08.github.io/wdd131/',
    githubLink: 'https://mufaro08.github.io/wdd131/',
  },
  {
    name: 'Project 6',
    description: 'A lesson on responsive images.',
    liveDemo: 'https://mufaro08.github.io/wdd131/week%2003/',
    githubLink: 'https://mufaro08.github.io/wdd131/week%2003/',
  },
  {
    name: 'Project 7',
    description: 'First website.',
    liveDemo: 'https://mufaro08.github.io/wdd130/',
    githubLink: 'https://mufaro08.github.io/wdd130/',
  },
  {
    name: 'Project 8',
    description: 'Filtered Temples.',
    liveDemo: 'https://mufaro08.github.io/wdd131/filtered-temples.html',
    githubLink: 'https://mufaro08.github.io/wdd131/filtered-temples.html',
  },
  {
    name: 'Project 9',
    description: 'Practicing forms.',
    liveDemo: 'https://mufaro08.github.io/wdd131/form.html',
    githubLink: 'https://mufaro08.github.io/wdd131/form.html',
  },
  {
    name: 'Project 10',
    description: 'Practicing tables.',
    liveDemo: 'https://mufaro08.github.io/wdd131/table.html',
    githubLink: 'https://mufaro08.github.io/wdd131/table.html',
  },
];

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
  const projectItem = document.createElement('div');
  projectItem.classList.add('project-item');
  projectItem.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.liveDemo}" target="_blank">Live Demo</a> |
        <a href="${project.githubLink}" target="_blank">GitHub</a>
    `;
  projectsGrid.appendChild(projectItem);
});

const HARARE_LAT = -17.8248;
const HARARE_LON = 31.053;
const API_KEY = '23bd5a286af8b011b2674afcb1bd4040';
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${HARARE_LAT}&lon=${HARARE_LON}&appid=${API_KEY}&units=metric`;
const CURRENT_LOCATION = 'Harare, ZW';

function getDayName(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  if (offset === 0) {
    return 'Today';
  }

  const options = { weekday: 'short' };
  return date.toLocaleDateString('en-US', options);
}

function getWeatherEmoji(iconCode) {
  if (iconCode.includes('01')) return '☀️';
  if (iconCode.includes('02')) return '🌤️';
  if (iconCode.includes('03') || iconCode.includes('04')) return '☁️';
  if (iconCode.includes('09') || iconCode.includes('10')) return '🌧️';
  if (iconCode.includes('11')) return '🌩️';
  if (iconCode.includes('13')) return '❄️';
  if (iconCode.includes('50')) return '🌫️';
  return '🌎';
}

async function fetchWeatherForecast() {
  try {
    const response = await fetch(FORECAST_URL);
    const data = await response.json();

    if (data.cod !== '200') {
      throw new Error(
        `Failed to fetch weather data: ${data.cod} - ${data.message}`
      );
    }

    const todayForecast = data.list[0];
    const tomorrowForecast = data.list[8];
    const dayAfterForecast = data.list[16];

    updateWeatherUI('today', todayForecast);
    updateWeatherUI('tomorrow', tomorrowForecast);
    updateWeatherUI('day-after', dayAfterForecast);
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    displayWeatherError();
  }
}

function updateWeatherUI(day, forecast) {
  const dayName = getDayName(day === 'today' ? 0 : day === 'tomorrow' ? 1 : 2);
  const temperature = forecast.main.temp.toFixed(1);
  const description = forecast.weather[0].description;
  const iconCode = forecast.weather[0].icon;
  const weatherEmoji = getWeatherEmoji(iconCode);

  document.getElementById(`${day}-temperature`).textContent = `${temperature}°C ${weatherEmoji}`;
  document.getElementById(`${day}-description`).textContent = `${description}`;
}

function displayWeatherError() {
  document.getElementById('today-temperature').textContent =
    'Error loading weather';
  document.getElementById('today-description').textContent = '';
  document.getElementById('tomorrow-temperature').textContent =
    'Error loading weather';
  document.getElementById('tomorrow-description').textContent = '';
  document.getElementById('day-after-temperature').textContent =
    'Error loading weather';
  document.getElementById('day-after-description').textContent = '';
}

fetchWeatherForecast();
