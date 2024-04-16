let round = 1;
class connect4 {
  constructor(x = 6, y = 7) {
    this.x = x;
    this.y = y;
  }
  table() {
    let game = document.getElementById("boardgame");

    let message = document.createElement("h3");
    // création du message qui affiche le joueur qui joue

    let table = document.createElement("table");
    //création de la table qui contient tous les tr qui contiennent tous les td

    let title = document.createElement("h1");

    let restart = document.createElement("button");
    // création du bouton qui permet de recommencer la partie.

    title.textContent = "Puissance 4";

    message.className = "message";
    // ajout de la classe message pour celui qui joue

    game.append(title, message);

    // creation de tr à chaque tour de boucle tant que i < à y.
    for (let i = 0; i < this.y; i++) {
      let tr = document.createElement("tr");

      tr.className = "tr";
      for (let j = 0; j < this.x; j++) {
        // creation de td à chaque tour de boucle tant que j < à x.
        let td = document.createElement("td");
        td.dataset.row = j;
        td.dataset.col = i;
        // ajout de 'valeurs' à chaque td pour avoir les coordonnées
        td.className = "td";

        tr.appendChild(td);

        // ajout de tous les td à l'intérieur de chaque tr.
      }

      table.appendChild(tr);

      // ajout de tous les tr qui contiennent les td à l'intérieur de la table.
    }

    game.appendChild(table);

    // ajout de la table à l'intérieur de l'élément html.

    let play = document.createElement("button");
    play.className = "jouer";
    play.textContent = "Jouer";
    game.appendChild(play);
    // création et ajout du bouton jouer
    restart.textContent = "Recommencer";
    restart.className = "restart";
    game.appendChild(restart);
  }

  game() {
    let tr = document.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
      // on parcourt les tr et sur le tr cliqué on prend la colonne la ligne la plus basse de la colonne
      tr[i].onclick = function () {
        for (let i = this.childElementCount - 1; i >= 0; i--) {
          if (
            this.children[i].classList?.contains("player1") ||
            this.children[i].classList?.contains("player2")
          ) {
            continue;
          }

          const col_check = this.children[i].getAttribute("data-col");
          const row_check = this.children[i].getAttribute("data-row");
          // on récupère la valeur des dataset à l'aide de la fonction getAttribute
          const col_check_int = parseInt(col_check);
          const row_check_int = parseInt(row_check);
          // on transforme ces valeurs qui sont sous la forme d'une string en int

          if (round == 1) {
            this.children[i].classList.add("player2");
            this.children[i].classList.add("player2");
            // check verticalement si le joueur a gagné
            if (
              typeof this.children[i] !== "undefined" &&
              typeof this.children[i + 1] !== "undefined" &&
              typeof this.children[i + 2] !== "undefined" &&
              typeof this.children[i + 3] !== "undefined"
            ) {
              if (
                this.children[i + 1].classList.contains("player2") &&
                this.children[i + 2].classList.contains("player2") &&
                this.children[i + 3].classList.contains("player2") &&
                this.children[i].classList.contains("player2")
              ) {
                alert("YELLOW wins!");
                location.reload();
              }
            }
            //check horizontalement si le joueur a gagné
            if (
              document
                .querySelector(
                  `[data-col="${col_check_int}"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int + 1
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int + 2
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int + 3
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2")
            ) {
              alert("Yellow wins!");
              location.reload();
            }
            // horizontalement si le joueur a gagné mais dans l'autre sens
            if (
              document
                .querySelector(
                  `[data-col="${col_check_int}"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int - 1
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int - 2
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int - 3
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player2")
            ) {
              alert("Yellow wins!");
              location.reload();
            }
            round = 2;
            let tour = document.getElementsByClassName("message")[0];
            tour.innerHTML = "Au tour du rouge";
            break;
          } else {
            this.children[i].classList.add("player1");
            // regarder si le joueur a gagné verticalement
            if (
              typeof this.children[i] !== "undefined" &&
              typeof this.children[i + 1] !== "undefined" &&
              typeof this.children[i + 2] !== "undefined" &&
              typeof this.children[i + 3] !== "undefined"
            ) {
              if (
                this.children[i + 1].classList.contains("player1") &&
                this.children[i + 2].classList.contains("player1") &&
                this.children[i + 3].classList.contains("player1") &&
                this.children[i].classList.contains("player1")
              ) {
                alert("RED wins!");
                location.reload();
              }
            }

            //horizontalement

            if (
              document
                .querySelector(
                  `[data-col="${col_check_int}"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int + 1
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int + 2
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int + 3
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1")
            ) {
              alert("Red wins!");
              location.reload();
            }

            // regarder si le joueur a gagné horizontalement

            if (
              document
                .querySelector(
                  `[data-col="${col_check_int}"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int - 1
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int - 2
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1") &&
              document
                .querySelector(
                  `[data-col="${
                    col_check_int - 3
                  }"][data-row="${row_check_int}"]`
                )
                ?.classList.contains("player1")
            ) {
              alert("Red wins!");
              location.reload();
            }
          }

          round = 1;

          let tour = document.getElementsByClassName("message")[0];

          tour.innerHTML = "Au tour du jaune";

          break;
        }
      };
    }

    // Affiche on click le joueur qui joue

    for (let i = 0; i < tr.length; i++) {
      tr[i].onclick = function () {
        for (let i = this.childElementCount - 1; i >= 0; i--) {
          if (
            this.children[i].classList?.contains("player1") ||
            this.children[i].classList?.contains("player2")
          ) {
            continue;
          }

          const col_check = this.children[i].getAttribute("data-col");
          const row_check = this.children[i].getAttribute("data-row");
          const col_check_int = parseInt(col_check);
          const row_check_int = parseInt(row_check);

          if (round == 1) {
            this.children[i].classList.add("player2");
            this.children[i].classList.add("player2");
            if (
              typeof this.children[i] !== "undefined" &&
              typeof this.children[i + 1] !== "undefined" &&
              typeof this.children[i + 2] !== "undefined" &&
              typeof this.children[i + 3] !== "undefined"
            ) {
              if (
                this.children[i + 1].classList.contains("player2") &&
                this.children[i + 2].classList.contains("player2") &&
                this.children[i + 3].classList.contains("player2") &&
                this.children[i].classList.contains("player2")
              ) {
                alert("YELLOW wins!");
                location.reload();
              }
            }

            if (
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 3}"][data-row="${row_check_int}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int}"]`)?.classList.contains("player2"))
               ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int}"]`)?.classList.contains("player2"))
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 3}"][data-row="${row_check_int + 3}"]`)?.classList.contains("player2"))
               ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 3}"][data-row="${row_check_int - 3}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 3}"][data-row="${row_check_int + 3}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 3}"][data-row="${row_check_int - 3}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 3}"][data-row="${row_check_int}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int + 1 }"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player2") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player2") &&
              document.querySelector(  `[data-col="${col_check_int + 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player2")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player2") &&
              document.querySelector(  `[data-col="${col_check_int - 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player2") &&
              document.querySelector(  `[data-col="${col_check_int + 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player2") &&
              document.querySelector(  `[data-col="${col_check_int + 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player2"))
            ) {
              alert("Yellow wins!");
              location.reload();
            }

            round = 2;
            let tour = document.getElementsByClassName("message")[0];
            tour.innerHTML = "Au tour du rouge";
            break;
          } else {
            // regarder si le joueur a gagné verticalement
            this.children[i].classList.add("player1");
            if (
              typeof this.children[i] !== "undefined" &&
              typeof this.children[i + 1] !== "undefined" &&
              typeof this.children[i + 2] !== "undefined" &&
              typeof this.children[i + 3] !== "undefined"
            ) {
              if (
                this.children[i + 1].classList.contains("player1") &&
                this.children[i + 2].classList.contains("player1") &&
                this.children[i + 3].classList.contains("player1") &&
                this.children[i].classList.contains("player1")
              ) {
                alert("RED wins!");
                location.reload();
              }
            }

            if (
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 3}"][data-row="${row_check_int}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int}"]`)?.classList.contains("player1"))
               ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int}"]`)?.classList.contains("player1"))
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 3}"][data-row="${row_check_int + 3}"]`)?.classList.contains("player1"))
               ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 3}"][data-row="${row_check_int - 3}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 3}"][data-row="${row_check_int + 3}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 3}"][data-row="${row_check_int - 3}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 2}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 3}"][data-row="${row_check_int}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int + 1 }"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int - 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player1") &&
              document.querySelector(`[data-col="${col_check_int + 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player1") &&
              document.querySelector(  `[data-col="${col_check_int + 2}"][data-row="${row_check_int - 2}"]`)?.classList.contains("player1")) 
              ||
              (document.querySelector(`[data-col="${col_check_int}"][data-row="${row_check_int}"]`)?.classList.contains("player1") &&
              document.querySelector(  `[data-col="${col_check_int - 1}"][data-row="${row_check_int - 1}"]`)?.classList.contains("player1") &&
              document.querySelector(  `[data-col="${col_check_int + 1}"][data-row="${row_check_int + 1}"]`)?.classList.contains("player1") &&
              document.querySelector(  `[data-col="${col_check_int + 2}"][data-row="${row_check_int + 2}"]`)?.classList.contains("player1"))
            ) {
              alert("Red wins!");
              location.reload();
            }
          }

          round = 1;

          let tour = document.getElementsByClassName("message")[0];

          tour.innerHTML = "Au tour du jaune";

          break;
        }
      };
    }
  }
}
// }

export default connect4;
