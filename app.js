
// ตรวจสอบค่าที่ส่งเข้ามาในฟังก์ชัน
function check_input(s, a, v, u, t) {
    let userfind = document.getElementById("find").value;

    // ตรวจสอบว่า User ต้องการหาอะไร
    if (userfind === "s") {
        if (a === "") {
            console.log("คำนวนหา s จากสมการs = (u + v)t / 2 เพราะไม่มีตัวเเปล a");
            display("s = (u + v)t / 2", (+u + +v) * +t / 2 + "m/s");
        }
        else if (v === "") {
            console.log("คำนวนหา s จากสมการs = ut + ½at² เพราะไม่มีตัวเเปล v");
            display('s = ut + ½at²', +u * +t + 0.5 * +a * Math.pow(t, 2) + "m/s");
        }
        else if (t === "") {
            console.log("คำนวนหา s จากสมการs = v² = u² + 2as เพราะไม่มีตัวเเปล t");
            display("s = (v² - u²) / 2a", (Math.pow(+v, 2) - Math.pow(+u, 2)) / (2 * +a) + " m");
        }
        else if (u === "") {
            console.log("คำนวนหา s จากสมการs = vt - ½at เพราะไม่มีตัวเเปล u");
            display("s = vt - ½at", +v * +t - 0.5 * +a * Math.pow(+t, 2) + "m/s");
        } else {
            display("ไม่สามารถคำนวนได้ครับจำเป็นต้องมีตัวเเปร 3ตัวเท่านั้นในการคำนวน", "");
        }


    } else if (userfind === "u") {
        if (a === "") {
            console.log("คำนวณหา u จากสมการ u = (2s / t) - v เพราะไม่มีตัวแปร a");
            let result = (2 * +s / +t) - +v;
            display("u = (2s / t) - v", result + " m/s");
        } else if (s === "") {
            console.log("คำนวณหา u จากสมการ u = v - at เพราะไม่มีตัวแปร s");
            let result = +v - +a * +t;
            display("u = v - at", result + " m/s");
        } else if (v === "") {
            console.log("คำนวณหา u จากสมการ u = (s - ½at²) / t เพราะไม่มีตัวแปร v");
            let result = (+s - 0.5 * + a * Math.pow(+t, 2)) / +t;
            display("u = (s - ½at²) / t", result + " m/s");
        } else if (t === "") {
            let discriminant = Math.pow(+v, 2) - 2 * + a * +s;
            if (discriminant < 0) {
                console.log("ไม่สามารถคำนวณ u จากสมการ u = √(v² - 2as) ได้ เพราะค่าภายใต้รากติดลบ");
                display("ไม่สามารถคำนวณ u จากสมการ u = √(v² - 2as) ได้ เพราะค่าภายใต้รากติดลบ", "ไม่สามารถคำนวณได้");
            } else {
                console.log("คำนวณหา u จากสมการ u = √(v² - 2as) เพราะไม่มีตัวแปร t");
                let result = Math.sqrt(discriminant);
                display("u = √(v² - 2as)", result + " m/s");
            }
        } else {
            display("ไม่สามารถคำนวนได้ครับจำเป็นต้องมีตัวเเปร 3ตัวเท่านั้นในการคำนวน", "");
        }
    }


    else if (userfind === "v") {
        if (a === "") {
            console.log("คำนวณหา v จากสมการ v = (2s / t) - u เพราะไม่มีตัวแปร a");
            let result = (2 * +s / +t) - + u;
            display("v = (2s / t) - u", result + " m/s");
        } else if (s === "") {
            console.log("คำนวณหา v จากสมการ v = u + at เพราะไม่มีตัวแปร s");
            let result = +u + +a * +t;
            display("v = u + at", result + " m/s");
        } else if (u === "") {
            console.log("คำนวณหา v จากสมการ v = (s + ½at²) / t เพราะไม่มีตัวแปร u");
            let result = (+s + 0.5 * +a * Math.pow(+t, 2)) / +t;
            display("v = (s + ½at²) / t", result + " m/s");
        } else if (t === "") {
            let discriminant = Math.pow(+u, 2) + 2 * +a * +s;
            if (discriminant < 0) {
                console.log("ไม่สามารถคำนวณ v จากสมการ v = √(u² + 2as) ได้ เพราะค่าภายใต้รากติดลบ");
                display("ไม่สามารถคำนวณ v จากสมการ v = √(u² + 2as) ได้ เพราะค่าภายใต้รากติดลบ", "ไม่สามารถคำนวณได้");
            } else {
                console.log("คำนวณหา v จากสมการ v = √(u² + 2as) เพราะไม่มีตัวแปร t");
                let result = Math.sqrt(discriminant);
                display("v = √(u² + 2as)", result + " m/s");
            }
        }
        else {
            display("ไม่สามารถคำนวนได้ครับจำเป็นต้องมีตัวเเปร 3ตัวเท่านั้นในการคำนวน", "");
        }
    }



    else if (userfind === "t") {
        if (a === "") {
            console.log("คำนวณหา t จากสมการ t = (2s) / (u + v) เพราะไม่มีตัวแปร a");
            let result = (2 * +s) / (+u + +v);
            display("t = (2s) / (u + v)", result + " s");
        } else if (s === "") {
            console.log("คำนวณหา t จากสมการ t = (v - u) / a เพราะไม่มีตัวแปร s");
            let result = (+v - +u) / +a;
            display("t = (v - u) / a", result + " s");
        } else if (v === "") {
            console.log("คำนวณหา t จากสมการ s = ut + ½at² (ต้องแก้สมการกำลังสอง) เพราะไม่มีตัวแปร v");
            let A = 0.5 * +a;
            let B = +u;
            let C = -+s;
            let discriminant = Math.pow(+B, 2) - 4 * +A * +C;
            if (discriminant < 0) {
                display("ไม่สามารถคำนวณได้ (ค่าดิสคริแนนต์ติดลบ)", "ไม่สามารถคำนวณได้ (ค่าดิสคริแนนต์ติดลบ)");
            } else {
                let t1 = (-+B + Math.sqrt(discriminant)) / (2 * +A);
                let t2 = (-+B - Math.sqrt(discriminant)) / (2 * +A);
                // เลือกค่าที่มากกว่า 0
                let result = t1 > 0 ? t1 : t2 > 0 ? t2 : "ไม่สามารถคำนวณได้";
                if (typeof result === "number") {
                    display(result + " s", "");
                } else {
                    display("ไม่สามารถคำนวณได้", "ไม่สามารถคำนวณได้");
                }
            }
        } else if (u === "") {
            // ใช้สมการ s = vt - ½at² → แก้สมการเช่นกัน
            console.log("คำนวณหา t จากสมการ s = vt - ½at² (ต้องแก้สมการกำลังสอง) เพราะไม่มีตัวแปร u");
            let A = -0.5 * +a;
            let B = +v;
            let C = -+s;
            let discriminant = Math.pow(+B, 2) - 4 * +A * +C;
            if (discriminant < 0) {
                display("ค่าดิสคริแนนต์ติดลบ", "ไม่สามารถคำนวณได้ (ค่าดิสคริแนนต์ติดลบ)");
            } else {
                let t1 = (-B + Math.sqrt(discriminant)) / (2 * A);
                let t2 = (-B - Math.sqrt(discriminant)) / (2 * A);
                let result = t1 > 0 ? t1 : t2 > 0 ? t2 : "ไม่สามารถคำนวณได้";
                display("s = vt - ½at²", result + " s");
            }
        } else {
            display("ไม่สามารถคำนวนได้ครับจำเป็นต้องมีตัวเเปร 3ตัวเท่านั้นในการคำนวน", "");
        }
    }



    else if (userfind === "a") {
        if (s === "") {
            console.log("คำนวณหา a จากสมการ a = (v - u) / t เพราะไม่มีตัวแปร s");
            let result = (+v - +u) / +t;
            display("a = (v - u) / t", result + " m/s²");
        } else if (t === "") {
            console.log("คำนวณหา a จากสมการ a = (v² - u²) / (2s) เพราะไม่มีตัวแปร t");
            let result = (Math.pow(+v, 2) - Math.pow(+u, 2)) / (2 * +s);
            display("a = (v² - u²) / (2s)", result + " m/s²");
        } else if (v === "") {
            console.log("คำนวณหา a จากสมการ a = [s - (ut)] / (0.5t²) เพราะไม่มีตัวแปร v");
            let result = (+s - +u * +t) / (0.5 * Math.pow(+t, 2));
            display("a = [s - (ut)] / (0.5t²)", result + " m/s²");
        } else if (u === "") {
            console.log("คำนวณหา a จากสมการ a = [(vt - s)] / (0.5t²) เพราะไม่มีตัวแปร u");
            let result = (+v * +t - +s) / (0.5 * Math.pow(+t, 2));
            display("a = [(vt - s)] / (0.5t²)", result + " m/s²");
        } else {
            display("ไม่สามารถคำนวนได้ครับจำเป็นต้องมีตัวเเปร 3ตัวเท่านั้นในการคำนวน", "");
        }
    }
    else {
        display("ไม่สามารถคำนวนได้ ", "");
    }
}



// ฟังก์ชันแสดงผล
function display(how, ans) {
    document.getElementById("sol").innerHTML = how
    document.getElementById("answer").innerHTML = ans
    document.getElementById("find").selectedIndex = 0;
    console.log("ถึงขั้นตอนส่งข้อมูล");
}
