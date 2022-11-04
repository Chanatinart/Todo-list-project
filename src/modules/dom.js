import { format, pareseISO, differenceInDays } from "date-fns";

const dom = (() => {
const sidebarMenu = document.querySelector('#nav');
const modal = document.querySelector('#modal');
const form = modal.querySelector('#form');
const modalTitle = modal.querySelector('#modal-title');
const modalTitleError = modal.querySelector('.modal-title-error');
const content = document.querySelector('#content');
const mainTitleText = document.querySelector('.main-title-text');
const projectLinks = document.querySelector('.projects-links');
const addTaskBtn = document.querySelector('#addTask');
const taskCount = document.querySelector('.tasks-count');
const tasksList = document.querySelector('.tasks-list');
const taskDescription = modal.querySelector('.task-description');
const taskDueDate = modal.querySelector('#dueDate');
 const taskPrioritySelection = modal.querySelector('.task-priority');
 


}
)