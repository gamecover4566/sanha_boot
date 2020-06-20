package com.sanha.practice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Homework2Controller {
	@RequestMapping("/calendar")
	public String createCalendar() {
		return "calendar";
	}
}
