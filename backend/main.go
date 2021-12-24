package main

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Student struct {
	ID int `json:"id"`
	Name string `json:"name"`
	DOB string `json:"dob"`
	Email string `json:"email"`
	Phone string `json:"phone"`
	Gender string `json:"gender"`
	Address string `json:"address"`
}

type Students struct {
	Students []Student `json:"students"`
}

type Teacher struct {
	ID int `json:"id"`
	Name string `json:"name"`
	DOB string `json:"dob"`
	Email string `json:"email"`
	Phone string `json:"phone"`
	Gender string `json:"gender"`
	Address string `json:"address"`
	SubjectSpecialty string `json:"subject_specialty"`
}

type Teachers struct {
	Teachers []Teacher `json:"teachers"`
}

func main() {
	db, err := sql.Open("mysql", "root:secret@tcp(:3308)/softeng_final")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	log.Println("connected")

	_, err = db.Exec("CREATE TABLE IF NOT EXISTS softeng_final.students(id INT(10) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), dob VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), gender VARCHAR(255), address VARCHAR(255))")
	if err != nil {
		panic(err.Error())
	}

	_, err = db.Exec("CREATE TABLE IF NOT EXISTS softeng_final.teachers(id INT(10) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), dob VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), gender VARCHAR(255), address VARCHAR(255), subject_specialty VARCHAR(255))")
	if err != nil {
		panic(err.Error())
	}

	app := fiber.New()
	app.Use(cors.New())

	app.Get("/student", func(c *fiber.Ctx) error {
		query := `SELECT id, name, dob, email, phone, gender, address FROM softeng_final.students ORDER BY id`
		rows, err := db.Query(query)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}
		defer rows.Close()

		result := new(Students)
		for rows.Next() {
			student := Student{}
			err := rows.Scan(&student.ID, &student.Name, &student.DOB, &student.Email, &student.Phone, &student.Gender, &student.Address)
			if err != nil {
				panic(err.Error())
			}

			result.Students = append(result.Students, student)
		}

		return c.JSON(result)
	})

	app.Post("/student", func(c *fiber.Ctx) error {
		result := new(Student)

		err := c.BodyParser(result)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		query := `INSERT INTO softeng_final.students(name, dob, email, phone, gender, address) VALUES(?, ?, ?, ?, ?, ?)`
		res, err := db.Exec(query, result.Name, result.DOB, result.Email, result.Phone, result.Gender, result.Address)
		if err != nil {
			panic(err.Error())
		}

		log.Println(res)

		return c.Status(201).JSON(result)
	})

	app.Get("/teacher", func(c *fiber.Ctx) error {
		query := `SELECT id, name, dob, email, phone, gender, address, subject_specialty FROM softeng_final.teachers ORDER BY id`
		rows, err := db.Query(query)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		result := new(Teachers)
		for rows.Next() {
			teacher := Teacher{}
			err := rows.Scan(&teacher.ID, &teacher.Name, &teacher.DOB, &teacher.Email, &teacher.Phone, &teacher.Gender, &teacher.Address, &teacher.SubjectSpecialty)
			if err != nil {
				panic(err.Error())
			}

			result.Teachers = append(result.Teachers, teacher)
		}

		return c.JSON(result)
	})

	app.Post("/teacher", func(c *fiber.Ctx) error {
		result := new(Teacher)

		err := c.BodyParser(result)
		if err != nil {
			return c.Status(500).SendString(err.Error())
		}

		query := `INSERT INTO softeng_final.teachers(name, dob, email, phone, gender, address, subject_specialty) VALUES(?, ?, ?, ?, ?, ?, ?)`
		res, err := db.Exec(query, result.Name, result.DOB, result.Email, result.Phone, result.Gender, result.Address, result.SubjectSpecialty)
		if err != nil {
			panic(err.Error())
		}

		log.Println(res)

		return c.Status(201).JSON(result)
	})

	log.Fatal(app.Listen(":5000"))
}