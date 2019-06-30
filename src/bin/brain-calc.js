#!/usr/bin/env node
import { getQuestion, getAnswer, descriptionGame } from '../games/calc';
import flow from '../flow';

flow(getQuestion, getAnswer, descriptionGame);
