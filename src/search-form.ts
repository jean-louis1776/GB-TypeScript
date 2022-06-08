import { renderBlock } from "./lib.js";
// hw3

/*Создать интерфейс SearchFormData, в котором описать структуру для полей поисковой формы.
 Написать функцию-обработчик формы search, которая собирает заполненные пользователем 
 данные в формате описанной структуры и передаёт их в функцию поиска. Функция поиска 
 принимает как аргумент переменную интерфейса SearchFormData, выводит полученный аргумент 
 в консоль и ничего не возвращает.*/

interface SearchFormData {
  // city: string,
  inDate: string;
  outDate: string;
  maxPrice: number;
}

function handlerSearch(data: SearchFormData): void {
  console.log(
    `Дата заезда: ${data.inDate}, дата выезда: ${data.outDate} и максимальная цена суток: ${data.maxPrice}`
  );
}

export function search() {
  const form = document.getElementsByTagName("form")[0];

  form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const data: SearchFormData = {
      // city: formData.get('city').toString(),
      inDate: formData.get("checkin").toString(),
      outDate: formData.get("checkout").toString(),
      maxPrice: +formData.get("price"),
    };

    handlerSearch(data);
  };
}

const d = new Date();
const dateOut = new Date(d.getFullYear(), d.getMonth() + 2, 0);
const defaultDateIn = new Date(d.setDate(d.getDate() + 1));
const defaultDateOut = new Date(d.setDate(d.getDate() + 3));

function formattedDate(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((n) => (n < 10 ? `0${n}` : `${n}`))
    .join("-");
}

const today = formattedDate(d);
const maxOutDate = formattedDate(dateOut);
const defaultIn = formattedDate(defaultDateIn);
const defaultOut = formattedDate(defaultDateOut);

export function renderSearchFormBlock(
  dateIn: string = defaultIn,
  dateOut: string = defaultOut
) {
  renderBlock(
    "search-form-block",
    `
    <form id="form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateIn}" min="${today}" max="${maxOutDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateOut}" min="${today}" max="${maxOutDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
