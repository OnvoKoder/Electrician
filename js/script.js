// ? Запуск игры
function geeks() {
	document.getElementById("game").style.opacity = "1";
	document.getElementById("but").style.opacity = "0";
}
// ? Работа игры
var color = 'green';
var colors = "red";
var k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16, k17, k18, k19, k20, k21, k22, k23, k24, k25, k26, k27, k28, k29, k30, k31, k32, k33, k34, k35, k36;
k1 = k2 = k3 = k4 = k5 = k6 = k7 = k8 = k9 = k10 = k11 = k12 = k13 = k14 = k15 = k16 = k17 = k18 = k19 = k20 = k21 = k22 = k23 = k24 = k25 = k26 = k27 = k28 = k29 = k30 = k31 = k32 = k33 = k34 = k35 = k36 = 0;
var test = 0;

function change() {
	if (k1 == 1) {
		if (k2 == 1) {
			if (k3 == 1) {
				if (k4 == 1) {
					if (k5 == 1) {
						if (k6 == 1) {
							if (k7 == 1) {
								if (k8 == 1) {
									if (k9 == 1) {
										if (k10 == 1) {
											if (k11 == 1) {
												if (k12 == 1) {
													if (k13 == 1) {
														if (k14 == 1) {
															if (k15 == 1) {
																if (k16 == 1) {
																	if (k17 == 1) {
																		if (k18 == 1) {
																			if (k19 == 1) {
																				if (k20 == 1) {
																					if (k21 == 1) {
																						if (k22 == 1) {
																							if (k23 == 1) {
																								if (k24 == 1) {
																									if (k25 == 1) {
																										if (k26 == 1) {
																											if (k27 == 1) {
																												if (k28 == 1) {
																													if (k29 == 1) {
																														if (k30 == 1) {
																															if (k31 == 1) {
																																if (k32 == 1) {
																																	if (k33 == 1) {
																																		if (k34 == 1) {
																																			if (k35 == 1) {
																																				{
																																					if (k36 == 1) {
																																						test = 1;
																																						alert('Я ЗНАЛ ЧТО У ВАС ГАДСКИХ ЭЛЬФОВ НЕТ ЧЕСТИ! НЕТ УВАЖЕНИЯ! НЕТ ПИВА!');
																																					} else {
																																						test = 0;
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
// TODO: b1-b6
// ! b1,b2,b7
function change_aa() {
	if (test == 0) {
		if (k1 == 0) {
			document.getElementById("b1").style.background = color;
			k1 = 1;
		} else {
			document.getElementById("b1").style.background = colors;
			k1 = 0;
		}
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
	} else {}
	document.getElementById("Click").innerHTML = count();
}
// ! b1,b2,b3,b8
function change_ab() {
	if (test == 0) {
		if (k1 == 0) {
			document.getElementById("b1").style.background = color;
			k1 = 1;
		} else {
			document.getElementById("b1").style.background = colors;
			k1 = 0;
		}
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
	} else {}
}
// !b2,b3,b4,b9 реализую
function change_ac() {
	if (test == 0) {
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
	} else {}
}
// ! b3,b4,b5,b10
function change_ad() {
	if (test == 0) {
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k5 == 0) {
			document.getElementById("b5").style.background = color;
			k5 = 1;
		} else {
			document.getElementById("b5").style.background = colors;
			k5 = 0;
		}
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
	} else {}
}
// ! b4,b5,b6,b11
function change_ae() {
	if (test == 0) {
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k5 == 0) {
			document.getElementById("b5").style.background = color;
			k5 = 1;
		} else {
			document.getElementById("b5").style.background = colors;
			k5 = 0;
		}
		if (k6 == 0) {
			document.getElementById("b6").style.background = color;
			k6 = 1;
		} else {
			document.getElementById("b6").style.background = colors;
			k5 = 0;
		}
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
	} else {}
}
// ! b5,b6,b12
function change_af() {
	if (test == 0) {
		if (k5 == 0) {
			document.getElementById("b5").style.background = color;
			k5 = 1;
		} else {
			document.getElementById("b5").style.background = colors;
			k5 = 0;
		}
		if (k6 == 0) {
			document.getElementById("b6").style.background = color;
			k6 = 1;
		} else {
			document.getElementById("b6").style.background = colors;
			k6 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
	} else {}
}
// TODO b7-b12
// !b1,b7,b8,b13
function change_ba() {
	if (test == 0) {
		if (k1 == 0) {
			document.getElementById("b1").style.background = color;
			k1 = 1;
		} else {
			document.getElementById("b1").style.background = colors;
			k1 = 0;
		}
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
	} else {}
}
// !b2,b7,b8,b9,b14
function change_bb() {
	if (test == 0) {
		if (k2 == 0) {
			document.getElementById("b2").style.background = color;
			k2 = 1;
		} else {
			document.getElementById("b2").style.background = colors;
			k2 = 0;
		}
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
	} else {}
}
// !b3,b8,b9,b10,b15
function change_bc() {
	if (test == 0) {
		if (k3 == 0) {
			document.getElementById("b3").style.background = color;
			k3 = 1;
		} else {
			document.getElementById("b3").style.background = colors;
			k3 = 0;
		}
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
	} else {}
}
// !b4,b9,b10,b11,b16
function change_bd() {
	if (test == 0) {
		if (k4 == 0) {
			document.getElementById("b4").style.background = color;
			k4 = 1;
		} else {
			document.getElementById("b4").style.background = colors;
			k4 = 0;
		}
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
	} else {}
}
// !b5,b10,b11,b12,b17
function change_be() {
	if (test == 0) {
		if (k5 == 0) {
			document.getElementById("b5").style.background = color;
			k5 = 1;
		} else {
			document.getElementById("b5").style.background = colors;
			k5 = 0;
		}
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k14 = 0;
		}
	} else {}
}
// !b6,b11,b12,b18
function change_bf() {
	if (test == 0) {
		if (k6 == 0) {
			document.getElementById("b6").style.background = color;
			k6 = 1;
		} else {
			document.getElementById("b6").style.background = colors;
			k6 = 0;
		}
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
	} else {}
}
// TODO b13-b18
// !b7,b13,b14,b19
function change_ca() {
	if (test == 0) {
		if (k7 == 0) {
			document.getElementById("b7").style.background = color;
			k7 = 1;
		} else {
			document.getElementById("b7").style.background = colors;
			k7 = 0;
		}
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
	} else {}
}
// !b8,b13,b14,b15,b20
function change_cb() {
	if (test == 0) {
		if (k8 == 0) {
			document.getElementById("b8").style.background = color;
			k8 = 1;
		} else {
			document.getElementById("b8").style.background = colors;
			k8 = 0;
		}
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
	} else {}
}
// !b9,b14,b15,b16,b21
function change_cc() {
	if (test == 0) {
		if (k9 == 0) {
			document.getElementById("b9").style.background = color;
			k9 = 1;
		} else {
			document.getElementById("b9").style.background = colors;
			k9 = 0;
		}
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}
	} else {}
}
// !b10,b15,b16,b17,b22
function change_cd() {
	if (test == 0) {
		if (k10 == 0) {
			document.getElementById("b10").style.background = color;
			k10 = 1;
		} else {
			document.getElementById("b10").style.background = colors;
			k10 = 0;
		}
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
	} else {}
}
// !b11,b16,b17,b18,b23
function change_ce() {
	if (test == 0) {
		if (k11 == 0) {
			document.getElementById("b11").style.background = color;
			k11 = 1;
		} else {
			document.getElementById("b11").style.background = colors;
			k11 = 0;
		}
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
	} else {}
}
// !b12,b17,b18,b24
function change_cf() {
	if (test == 0) {
		if (k12 == 0) {
			document.getElementById("b12").style.background = color;
			k12 = 1;
		} else {
			document.getElementById("b12").style.background = colors;
			k12 = 0;
		}
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
	} else {}
}
// TODO b19-b24
// !b13,b19,b20,b25
function change_da() {
	if (test == 0) {
		if (k13 == 0) {
			document.getElementById("b13").style.background = color;
			k13 = 1;
		} else {
			document.getElementById("b13").style.background = colors;
			k13 = 0;
		}
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
		if (k25 == 0) {
			document.getElementById("b25").style.background = color;
			k25 = 1;
		} else {
			document.getElementById("b25").style.background = colors;
			k25 = 0;
		}
	} else {}
}
// !b14,b20,b21,b19,b26
function change_db() {
	if (test == 0) {
		if (k14 == 0) {
			document.getElementById("b14").style.background = color;
			k14 = 1;
		} else {
			document.getElementById("b14").style.background = colors;
			k14 = 0;
		}
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}

		if (k26 == 0) {
			document.getElementById("b26").style.background = color;
			k26 = 1;
		} else {
			document.getElementById("b26").style.background = colors;
			k26 = 0;
		}
	} else {}
}
// !b15,b20,b21,b22,b27
function change_dc() {
	if (test == 0) {
		if (k15 == 0) {
			document.getElementById("b15").style.background = color;
			k15 = 1;
		} else {
			document.getElementById("b15").style.background = colors;
			k15 = 0;
		}
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b27").style.background = colors;
			k27 = 0;
		}
		if (k27 == 0) {
			document.getElementById("b27").style.background = color;
			k27 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k27 = 0;
		}
	} else {}
}
// !b16,b21,b22,b23,b28
function change_dd() {
	if (test == 0) {
		if (k16 == 0) {
			document.getElementById("b16").style.background = color;
			k16 = 1;
		} else {
			document.getElementById("b16").style.background = colors;
			k16 = 0;
		}
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k28 == 0) {
			document.getElementById("b28").style.background = color;
			k28 = 1;
		} else {
			document.getElementById("b28").style.background = colors;
			k28 = 0;
		}
	} else {}
}
// !b17,b22,b23,b24,b29
function change_de() {
	if (test == 0) {
		if (k17 == 0) {
			document.getElementById("b17").style.background = color;
			k17 = 1;
		} else {
			document.getElementById("b17").style.background = colors;
			k17 = 0;
		}
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
		if (k29 == 0) {
			document.getElementById("b29").style.background = color;
			k29 = 1;
		} else {
			document.getElementById("b29").style.background = colors;
			k29 = 0;
		}
	} else {}
}
// !b18,b23,b24,b30
function change_df() {
	if (test == 0) {
		if (k18 == 0) {
			document.getElementById("b18").style.background = color;
			k18 = 1;
		} else {
			document.getElementById("b18").style.background = colors;
			k18 = 0;
		}
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
		if (k30 == 0) {
			document.getElementById("b30").style.background = color;
			k30 = 1;
		} else {
			document.getElementById("b30").style.background = colors;
			k30 = 0;
		}
	} else {}
}
// TODO b25-30
// !b19,b25,b26,b31
function change_ea() {
	if (test == 0) {
		if (k19 == 0) {
			document.getElementById("b19").style.background = color;
			k19 = 1;
		} else {
			document.getElementById("b19").style.background = colors;
			k19 = 0;
		}
		if (k25 == 0) {
			document.getElementById("b25").style.background = color;
			k25 = 1;
		} else {
			document.getElementById("b25").style.background = colors;
			k25 = 0;
		}
		if (k26 == 0) {
			document.getElementById("b26").style.background = color;
			k26 = 1;
		} else {
			document.getElementById("b26").style.background = colors;
			k26 = 0;
		}
		if (k31 == 0) {
			document.getElementById("b31").style.background = color;
			k31 = 1;
		} else {
			document.getElementById("b31").style.background = colors;
			k31 = 0;
		}
	} else {}
}
// !b20,b25,b26,b27,b32
function change_eb() {
	if (test == 0) {
		if (k20 == 0) {
			document.getElementById("b20").style.background = color;
			k20 = 1;
		} else {
			document.getElementById("b20").style.background = colors;
			k20 = 0;
		}
		if (k25 == 0) {
			document.getElementById("b25").style.background = color;
			k25 = 1;
		} else {
			document.getElementById("b25").style.background = colors;
			k25 = 0;
		}
		if (k26 == 0) {
			document.getElementById("b26").style.background = color;
			k26 = 1;
		} else {
			document.getElementById("b26").style.background = colors;
			k26 = 0;
		}
		if (k27 == 0) {
			document.getElementById("b27").style.background = color;
			k27 = 1;
		} else {
			document.getElementById("b27").style.background = colors;
			k27 = 0;
		}

		if (k32 == 0) {
			document.getElementById("b32").style.background = color;
			k32 = 1;
		} else {
			document.getElementById("b32").style.background = colors;
			k32 = 0;
		}
	} else {}
}
// !b21,b26,b27,b28,b33
function change_ec() {
	if (test == 0) {
		if (k21 == 0) {
			document.getElementById("b21").style.background = color;
			k21 = 1;
		} else {
			document.getElementById("b21").style.background = colors;
			k21 = 0;
		}
		if (k26 == 0) {
			document.getElementById("b26").style.background = color;
			k26 = 1;
		} else {
			document.getElementById("b26").style.background = colors;
			k26 = 0;
		}
		if (k27 == 0) {
			document.getElementById("b27").style.background = color;
			k27 = 1;
		} else {
			document.getElementById("b27").style.background = colors;
			k27 = 0;
		}
		if (k28 == 0) {
			document.getElementById("b28").style.background = color;
			k28 = 1;
		} else {
			document.getElementById("b28").style.background = colors;
			k28 = 0;
		}
		if (k33 == 0) {
			document.getElementById("b33").style.background = color;
			k33 = 1;
		} else {
			document.getElementById("b33").style.background = colors;
			k33 = 0;
		}
	} else {}
}
// !b22,b27,b28,b29,b34
function change_ed() {
	if (test == 0) {
		if (k22 == 0) {
			document.getElementById("b22").style.background = color;
			k22 = 1;
		} else {
			document.getElementById("b22").style.background = colors;
			k22 = 0;
		}
		if (k27 == 0) {
			document.getElementById("b27").style.background = color;
			k27 = 1;
		} else {
			document.getElementById("b27").style.background = colors;
			k27 = 0;
		}
		if (k28 == 0) {
			document.getElementById("b28").style.background = color;
			k28 = 1;
		} else {
			document.getElementById("b28").style.background = colors;
			k28 = 0;
		}
		if (k34 == 0) {
			document.getElementById("b34").style.background = color;
			k34 = 1;
		} else {
			document.getElementById("b34").style.background = colors;
			k34 = 0;
		}
		if (k29 == 0) {
			document.getElementById("b29").style.background = color;
			k29 = 1;
		} else {
			document.getElementById("b29").style.background = colors;
			k29 = 0;
		}
	} else {}
}
// !b23,b28,b29,b30,b35
function change_ee() {
	if (test == 0) {
		if (k23 == 0) {
			document.getElementById("b23").style.background = color;
			k23 = 1;
		} else {
			document.getElementById("b23").style.background = colors;
			k23 = 0;
		}
		if (k28 == 0) {
			document.getElementById("b28").style.background = color;
			k28 = 1;
		} else {
			document.getElementById("b28").style.background = colors;
			k28 = 0;
		}
		if (k29 == 0) {
			document.getElementById("b29").style.background = color;
			k29 = 1;
		} else {
			document.getElementById("b29").style.background = colors;
			k29 = 0;
		}
		if (k30 == 0) {
			document.getElementById("b30").style.background = color;
			k30 = 1;
		} else {
			document.getElementById("b30").style.background = colors;
			k30 = 0;
		}
		if (k35 == 0) {
			document.getElementById("b35").style.background = color;
			k35 = 1;
		} else {
			document.getElementById("b35").style.background = colors;
			k35 = 0;
		}
	} else {}
}
// !b24,b29,b30,b36
function change_ef() {
	if (test == 0) {
		if (k24 == 0) {
			document.getElementById("b24").style.background = color;
			k24 = 1;
		} else {
			document.getElementById("b24").style.background = colors;
			k24 = 0;
		}
		if (k29 == 0) {
			document.getElementById("b29").style.background = color;
			k29 = 1;
		} else {
			document.getElementById("b29").style.background = colors;
			k29 = 0;
		}
		if (k30 == 0) {
			document.getElementById("b30").style.background = color;
			k30 = 1;
		} else {
			document.getElementById("b30").style.background = colors;
			k30 = 0;
		}
		if (k36 == 0) {
			document.getElementById("b36").style.background = color;
			k36 = 1;
		} else {
			document.getElementById("b36").style.background = colors;
			k36 = 0;
		}
	} else {}
}
// todo b31-b36
// !b25,b31,b32
function change_fa() {
	if (test == 0) {
		if (k25 == 0) {
			document.getElementById("b25").style.background = color;
			k25 = 1;
		} else {
			document.getElementById("b25").style.background = colors;
			k25 = 0;
		}
		if (k31 == 0) {
			document.getElementById("b31").style.background = color;
			k31 = 1;
		} else {
			document.getElementById("b31").style.background = colors;
			k31 = 0;
		}
		if (k32 == 0) {
			document.getElementById("b32").style.background = color;
			k32 = 1;
		} else {
			document.getElementById("b32").style.background = colors;
			k32 = 0;
		}
	} else {}
}
// !b26,b31,b32,b33
function change_fb() {
	if (test == 0) {
		if (k31 == 0) {
			document.getElementById("b31").style.background = color;
			k31 = 1;
		} else {
			document.getElementById("b31").style.background = colors;
			k31 = 0;
		}
		if (k26 == 0) {
			document.getElementById("b26").style.background = color;
			k26 = 1;
		} else {
			document.getElementById("b26").style.background = colors;
			k26 = 0;
		}
		if (k32 == 0) {
			document.getElementById("b32").style.background = color;
			k32 = 1;
		} else {
			document.getElementById("b32").style.background = colors;
			k32 = 0;
		}
		if (k33 == 0) {
			document.getElementById("b33").style.background = color;
			k33 = 1;
		} else {
			document.getElementById("b33").style.background = colors;
			k33 = 0;
		}
	} else {}
}
// !b27,b32,b34,b33
function change_fc() {
	if (test == 0) {
		if (k32 == 0) {
			document.getElementById("b32").style.background = color;
			k32 = 1;
		} else {
			document.getElementById("b32").style.background = colors;
			k32 = 0;
		}
		if (k27 == 0) {
			document.getElementById("b27").style.background = color;
			k27 = 1;
		} else {
			document.getElementById("b27").style.background = colors;
			k27 = 0;
		}
		if (k33 == 0) {
			document.getElementById("b33").style.background = color;
			k33 = 1;
		} else {
			document.getElementById("b33").style.background = colors;
			k33 = 0;
		}
		if (k34 == 0) {
			document.getElementById("b34").style.background = color;
			k34 = 1;
		} else {
			document.getElementById("b34").style.background = colors;
			k34 = 0;
		}
	} else {}
}
// !b28,b33,b35,b34
function change_fd() {
	if (test == 0) {
		if (k33 == 0) {
			document.getElementById("b33").style.background = color;
			k33 = 1;
		} else {
			document.getElementById("b33").style.background = colors;
			k33 = 0;
		}
		if (k34 == 0) {
			document.getElementById("b34").style.background = color;
			k34 = 1;
		} else {
			document.getElementById("b34").style.background = colors;
			k34 = 0;
		}
		if (k35 == 0) {
			document.getElementById("b35").style.background = color;
			k35 = 1;
		} else {
			document.getElementById("b35").style.background = colors;
			k35 = 0;
		}
		if (k28 == 0) {
			document.getElementById("b28").style.background = color;
			k28 = 1;
		} else {
			document.getElementById("b28").style.background = colors;
			k28 = 0;
		}
	} else {}
}
// !b29,b34,b35,b36
function change_fe() {
	if (test == 0) {
		if (k34 == 0) {
			document.getElementById("b34").style.background = color;
			k34 = 1;
		} else {
			document.getElementById("b34").style.background = colors;
			k34 = 0;
		}
		if (k29 == 0) {
			document.getElementById("b29").style.background = color;
			k29 = 1;
		} else {
			document.getElementById("b29").style.background = colors;
			k29 = 0;
		}
		if (k36 == 0) {
			document.getElementById("b36").style.background = color;
			k36 = 1;
		} else {
			document.getElementById("b36").style.background = colors;
			k36 = 0;
		}
		if (k35 == 0) {
			document.getElementById("b35").style.background = color;
			k35 = 1;
		} else {
			document.getElementById("b35").style.background = colors;
			k35 = 0;
		}
	} else {}
}
// !,b30,b35,b36
function change_ff() {
	if (test == 0) {
		if (k35 == 0) {
			document.getElementById("b35").style.background = color;
			k35 = 1;
		} else {
			document.getElementById("b35").style.background = colors;
			k35 = 0;
		}
		if (k30 == 0) {
			document.getElementById("b30").style.background = color;
			k30 = 1;
		} else {
			document.getElementById("b30").style.background = colors;
			k30 = 0;
		}
		if (k36 == 0) {
			document.getElementById("b36").style.background = color;
			k36 = 1;
		} else {
			document.getElementById("b36").style.background = colors;
			k36 = 0;
		}
	} else {}
}
// ? счечик 
var count = (function () {
	var counts = 0;
	return function () {
		return counts += 1;
	}
})();

function aa() {
	document.getElementById("ker").innerHTML = count();
}

function ab() {
	document.getElementById("ker").innerHTML = count();
}

function ac() {
	document.getElementById("ker").innerHTML = count();
}

function ad() {
	document.getElementById("ker").innerHTML = count();
}

function ae() {
	document.getElementById("ker").innerHTML = count();
}

function af() {
	document.getElementById("ker").innerHTML = count();
}

function ba() {
	document.getElementById("ker").innerHTML = count();
}

function bb() {
	document.getElementById("ker").innerHTML = count();
}

function bd() {
	document.getElementById("ker").innerHTML = count();
}

function bc() {
	document.getElementById("ker").innerHTML = count();
}

function be() {
	document.getElementById("ker").innerHTML = count();
}

function bf() {
	document.getElementById("ker").innerHTML = count();
}

function ca() {
	document.getElementById("ker").innerHTML = count();
}

function cb() {
	document.getElementById("ker").innerHTML = count();
}

function cc() {
	document.getElementById("ker").innerHTML = count();
}

function cd() {
	document.getElementById("ker").innerHTML = count();
}

function ce() {
	document.getElementById("ker").innerHTML = count();
}

function cf() {
	document.getElementById("ker").innerHTML = count();
}

function da() {
	document.getElementById("ker").innerHTML = count();
}

function db() {
	document.getElementById("ker").innerHTML = count();
}

function dd() {
	document.getElementById("ker").innerHTML = count();
}

function dc() {
	document.getElementById("ker").innerHTML = count();
}

function de() {
	document.getElementById("ker").innerHTML = count();
}

function df() {
	document.getElementById("ker").innerHTML = count();
}

function ea() {
	document.getElementById("ker").innerHTML = count();
}

function eb() {
	document.getElementById("ker").innerHTML = count();
}

function ec() {
	document.getElementById("ker").innerHTML = count();
}

function ed() {
	document.getElementById("ker").innerHTML = count();
}

function ee() {
	document.getElementById("ker").innerHTML = count();
}

function ef() {
	document.getElementById("ker").innerHTML = count();
}

function fa() {
	document.getElementById("ker").innerHTML = count();
}

function fb() {
	document.getElementById("ker").innerHTML = count();
}

function fc() {
	document.getElementById("ker").innerHTML = count();
}

function fd() {
	document.getElementById("ker").innerHTML = count();
}

function fe() {
	document.getElementById("ker").innerHTML = count();
}

function ff() {
	document.getElementById("ker").innerHTML = count();
}