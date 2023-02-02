CREATE TABLE `countries` (
  `id_country` int NOT NULL,
  `name` text NOT NULL,
  `flag` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `countries`
--

INSERT INTO `countries` (`id_country`, `name`, `flag`) VALUES
(1, 'Afghanistan', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'),
(2, 'Åland Islands', 'https://flagcdn.com/ax.svg'),
(3, 'Albania', 'https://flagcdn.com/al.svg'),
(4, 'Algeria', 'https://flagcdn.com/dz.svg'),
(5, 'American Samoa', 'https://flagcdn.com/as.svg'),
(6, 'Andorra', 'https://flagcdn.com/ad.svg'),
(7, 'Angola', 'https://flagcdn.com/ao.svg'),
(8, 'Anguilla', 'https://flagcdn.com/ai.svg'),
(9, 'Antarctica', 'https://flagcdn.com/aq.svg'),
(10, 'Antigua and Barbuda', 'https://flagcdn.com/ag.svg'),
(11, 'Argentina', 'https://flagcdn.com/ar.svg'),
(12, 'Armenia', 'https://flagcdn.com/am.svg'),
(13, 'Aruba', 'https://flagcdn.com/aw.svg'),
(14, 'Australia', 'https://flagcdn.com/au.svg'),
(15, 'Austria', 'https://flagcdn.com/at.svg'),
(16, 'Azerbaijan', 'https://flagcdn.com/az.svg'),
(17, 'Bahamas', 'https://flagcdn.com/bs.svg'),
(18, 'Bahrain', 'https://flagcdn.com/bh.svg'),
(19, 'Bangladesh', 'https://flagcdn.com/bd.svg'),
(20, 'Barbados', 'https://flagcdn.com/bb.svg'),
(21, 'Belarus', 'https://flagcdn.com/by.svg'),
(22, 'Belgium', 'https://flagcdn.com/be.svg'),
(23, 'Belize', 'https://flagcdn.com/bz.svg'),
(24, 'Benin', 'https://flagcdn.com/bj.svg'),
(25, 'Bermuda', 'https://flagcdn.com/bm.svg'),
(26, 'Bhutan', 'https://flagcdn.com/bt.svg'),
(27, 'Bolivia (Plurinational State of)', 'https://flagcdn.com/bo.svg'),
(28, 'Bonaire, Sint Eustatius and Saba', 'https://flagcdn.com/bq.svg'),
(29, 'Bosnia and Herzegovina', 'https://flagcdn.com/ba.svg'),
(30, 'Botswana', 'https://flagcdn.com/bw.svg'),
(31, 'Bouvet Island', 'https://flagcdn.com/bv.svg'),
(32, 'Brazil', 'https://flagcdn.com/br.svg'),
(33, 'British Indian Ocean Territory', 'https://flagcdn.com/io.svg'),
(34, 'United States Minor Outlying Islands', 'https://flagcdn.com/um.svg'),
(35, 'Virgin Islands (British)', 'https://flagcdn.com/vg.svg'),
(36, 'Virgin Islands (U.S.)', 'https://flagcdn.com/vi.svg'),
(37, 'Brunei Darussalam', 'https://flagcdn.com/bn.svg'),
(38, 'Bulgaria', 'https://flagcdn.com/bg.svg'),
(39, 'Burkina Faso', 'https://flagcdn.com/bf.svg'),
(40, 'Burundi', 'https://flagcdn.com/bi.svg'),
(41, 'Cambodia', 'https://flagcdn.com/kh.svg'),
(42, 'Cameroon', 'https://flagcdn.com/cm.svg'),
(43, 'Canada', 'https://flagcdn.com/ca.svg'),
(44, 'Cabo Verde', 'https://flagcdn.com/cv.svg'),
(45, 'Cayman Islands', 'https://flagcdn.com/ky.svg'),
(46, 'Central African Republic', 'https://flagcdn.com/cf.svg'),
(47, 'Chad', 'https://flagcdn.com/td.svg'),
(48, 'Chile', 'https://flagcdn.com/cl.svg'),
(49, 'China', 'https://flagcdn.com/cn.svg'),
(50, 'Christmas Island', 'https://flagcdn.com/cx.svg'),
(51, 'Cocos (Keeling) Islands', 'https://flagcdn.com/cc.svg'),
(52, 'Colombia', 'https://flagcdn.com/co.svg'),
(53, 'Comoros', 'https://flagcdn.com/km.svg'),
(54, 'Congo', 'https://flagcdn.com/cg.svg'),
(55, 'Congo (Democratic Republic of the)', 'https://flagcdn.com/cd.svg'),
(56, 'Cook Islands', 'https://flagcdn.com/ck.svg'),
(57, 'Costa Rica', 'https://flagcdn.com/cr.svg'),
(58, 'Croatia', 'https://flagcdn.com/hr.svg'),
(59, 'Cuba', 'https://flagcdn.com/cu.svg'),
(60, 'Curaçao', 'https://flagcdn.com/cw.svg'),
(61, 'Cyprus', 'https://flagcdn.com/cy.svg'),
(62, 'Czech Republic', 'https://flagcdn.com/cz.svg'),
(63, 'Denmark', 'https://flagcdn.com/dk.svg'),
(64, 'Djibouti', 'https://flagcdn.com/dj.svg'),
(65, 'Dominica', 'https://flagcdn.com/dm.svg'),
(66, 'Dominican Republic', 'https://flagcdn.com/do.svg'),
(67, 'Ecuador', 'https://flagcdn.com/ec.svg'),
(68, 'Egypt', 'https://flagcdn.com/eg.svg'),
(69, 'El Salvador', 'https://flagcdn.com/sv.svg'),
(70, 'Equatorial Guinea', 'https://flagcdn.com/gq.svg'),
(71, 'Eritrea', 'https://flagcdn.com/er.svg'),
(72, 'Estonia', 'https://flagcdn.com/ee.svg'),
(73, 'Ethiopia', 'https://flagcdn.com/et.svg'),
(74, 'Falkland Islands (Malvinas)', 'https://flagcdn.com/fk.svg'),
(75, 'Faroe Islands', 'https://flagcdn.com/fo.svg'),
(76, 'Fiji', 'https://flagcdn.com/fj.svg'),
(77, 'Finland', 'https://flagcdn.com/fi.svg'),
(78, 'France', 'https://flagcdn.com/fr.svg'),
(79, 'French Guiana', 'https://flagcdn.com/gf.svg'),
(80, 'French Polynesia', 'https://flagcdn.com/pf.svg'),
(81, 'French Southern Territories', 'https://flagcdn.com/tf.svg'),
(82, 'Gabon', 'https://flagcdn.com/ga.svg'),
(83, 'Gambia', 'https://flagcdn.com/gm.svg'),
(84, 'Georgia', 'https://flagcdn.com/ge.svg'),
(85, 'Germany', 'https://flagcdn.com/de.svg'),
(86, 'Ghana', 'https://flagcdn.com/gh.svg'),
(87, 'Gibraltar', 'https://flagcdn.com/gi.svg'),
(88, 'Greece', 'https://flagcdn.com/gr.svg'),
(89, 'Greenland', 'https://flagcdn.com/gl.svg'),
(90, 'Grenada', 'https://flagcdn.com/gd.svg'),
(91, 'Guadeloupe', 'https://flagcdn.com/gp.svg'),
(92, 'Guam', 'https://flagcdn.com/gu.svg'),
(93, 'Guatemala', 'https://flagcdn.com/gt.svg'),
(94, 'Guernsey', 'https://flagcdn.com/gg.svg'),
(95, 'Guinea', 'https://flagcdn.com/gn.svg'),
(96, 'Guinea-Bissau', 'https://flagcdn.com/gw.svg'),
(97, 'Guyana', 'https://flagcdn.com/gy.svg'),
(98, 'Haiti', 'https://flagcdn.com/ht.svg'),
(99, 'Heard Island and McDonald Islands', 'https://flagcdn.com/hm.svg'),
(100, 'Vatican City', 'https://flagcdn.com/va.svg'),
(101, 'Honduras', 'https://flagcdn.com/hn.svg'),
(102, 'Hungary', 'https://flagcdn.com/hu.svg'),
(103, 'Hong Kong', 'https://flagcdn.com/hk.svg'),
(104, 'Iceland', 'https://flagcdn.com/is.svg'),
(105, 'India', 'https://flagcdn.com/in.svg'),
(106, 'Indonesia', 'https://flagcdn.com/id.svg'),
(107, 'Ivory Coast', 'https://flagcdn.com/ci.svg'),
(108, 'Iran (Islamic Republic of)', 'https://flagcdn.com/ir.svg'),
(109, 'Iraq', 'https://flagcdn.com/iq.svg'),
(110, 'Ireland', 'https://flagcdn.com/ie.svg'),
(111, 'Isle of Man', 'https://flagcdn.com/im.svg'),
(112, 'Israel', 'https://flagcdn.com/il.svg'),
(113, 'Italy', 'https://flagcdn.com/it.svg'),
(114, 'Jamaica', 'https://flagcdn.com/jm.svg'),
(115, 'Japan', 'https://flagcdn.com/jp.svg'),
(116, 'Jersey', 'https://flagcdn.com/je.svg'),
(117, 'Jordan', 'https://flagcdn.com/jo.svg'),
(118, 'Kazakhstan', 'https://flagcdn.com/kz.svg'),
(119, 'Kenya', 'https://flagcdn.com/ke.svg'),
(120, 'Kiribati', 'https://flagcdn.com/ki.svg'),
(121, 'Kuwait', 'https://flagcdn.com/kw.svg'),
(122, 'Kyrgyzstan', 'https://flagcdn.com/kg.svg'),
(123, 'Lao People\'s Democratic Republic', 'https://flagcdn.com/la.svg'),
(124, 'Latvia', 'https://flagcdn.com/lv.svg'),
(125, 'Lebanon', 'https://flagcdn.com/lb.svg'),
(126, 'Lesotho', 'https://flagcdn.com/ls.svg'),
(127, 'Liberia', 'https://flagcdn.com/lr.svg'),
(128, 'Libya', 'https://flagcdn.com/ly.svg'),
(129, 'Liechtenstein', 'https://flagcdn.com/li.svg'),
(130, 'Lithuania', 'https://flagcdn.com/lt.svg'),
(131, 'Luxembourg', 'https://flagcdn.com/lu.svg'),
(132, 'Macao', 'https://flagcdn.com/mo.svg'),
(133, 'North Macedonia', 'https://flagcdn.com/mk.svg'),
(134, 'Madagascar', 'https://flagcdn.com/mg.svg'),
(135, 'Malawi', 'https://flagcdn.com/mw.svg'),
(136, 'Malaysia', 'https://flagcdn.com/my.svg'),
(137, 'Maldives', 'https://flagcdn.com/mv.svg'),
(138, 'Mali', 'https://flagcdn.com/ml.svg'),
(139, 'Malta', 'https://flagcdn.com/mt.svg'),
(140, 'Marshall Islands', 'https://flagcdn.com/mh.svg'),
(141, 'Martinique', 'https://flagcdn.com/mq.svg'),
(142, 'Mauritania', 'https://flagcdn.com/mr.svg'),
(143, 'Mauritius', 'https://flagcdn.com/mu.svg'),
(144, 'Mayotte', 'https://flagcdn.com/yt.svg'),
(145, 'Mexico', 'https://flagcdn.com/mx.svg'),
(146, 'Micronesia (Federated States of)', 'https://flagcdn.com/fm.svg'),
(147, 'Moldova (Republic of)', 'https://flagcdn.com/md.svg'),
(148, 'Monaco', 'https://flagcdn.com/mc.svg'),
(149, 'Mongolia', 'https://flagcdn.com/mn.svg'),
(150, 'Montenegro', 'https://flagcdn.com/me.svg'),
(151, 'Montserrat', 'https://flagcdn.com/ms.svg'),
(152, 'Morocco', 'https://flagcdn.com/ma.svg'),
(153, 'Mozambique', 'https://flagcdn.com/mz.svg'),
(154, 'Myanmar', 'https://flagcdn.com/mm.svg'),
(155, 'Namibia', 'https://flagcdn.com/na.svg'),
(156, 'Nauru', 'https://flagcdn.com/nr.svg'),
(157, 'Nepal', 'https://flagcdn.com/np.svg'),
(158, 'Netherlands', 'https://flagcdn.com/nl.svg'),
(159, 'New Caledonia', 'https://flagcdn.com/nc.svg'),
(160, 'New Zealand', 'https://flagcdn.com/nz.svg'),
(161, 'Nicaragua', 'https://flagcdn.com/ni.svg'),
(162, 'Niger', 'https://flagcdn.com/ne.svg'),
(163, 'Nigeria', 'https://flagcdn.com/ng.svg'),
(164, 'Niue', 'https://flagcdn.com/nu.svg'),
(165, 'Norfolk Island', 'https://flagcdn.com/nf.svg'),
(166, 'Korea (Democratic People\'s Republic of)', 'https://flagcdn.com/kp.svg'),
(167, 'Northern Mariana Islands', 'https://flagcdn.com/mp.svg'),
(168, 'Norway', 'https://flagcdn.com/no.svg'),
(169, 'Oman', 'https://flagcdn.com/om.svg'),
(170, 'Pakistan', 'https://flagcdn.com/pk.svg'),
(171, 'Palau', 'https://flagcdn.com/pw.svg'),
(172, 'Palestine, State of', 'https://flagcdn.com/ps.svg'),
(173, 'Panama', 'https://flagcdn.com/pa.svg'),
(174, 'Papua New Guinea', 'https://flagcdn.com/pg.svg'),
(175, 'Paraguay', 'https://flagcdn.com/py.svg'),
(176, 'Peru', 'https://flagcdn.com/pe.svg'),
(177, 'Philippines', 'https://flagcdn.com/ph.svg'),
(178, 'Pitcairn', 'https://flagcdn.com/pn.svg'),
(179, 'Poland', 'https://flagcdn.com/pl.svg'),
(180, 'Portugal', 'https://flagcdn.com/pt.svg'),
(181, 'Puerto Rico', 'https://flagcdn.com/pr.svg'),
(182, 'Qatar', 'https://flagcdn.com/qa.svg'),
(183, 'Republic of Kosovo', 'https://flagcdn.com/xk.svg'),
(184, 'Réunion', 'https://flagcdn.com/re.svg'),
(185, 'Romania', 'https://flagcdn.com/ro.svg'),
(186, 'Russian Federation', 'https://flagcdn.com/ru.svg'),
(187, 'Rwanda', 'https://flagcdn.com/rw.svg'),
(188, 'Saint Barthélemy', 'https://flagcdn.com/bl.svg'),
(189, 'Saint Helena, Ascension and Tristan da Cunha', 'https://flagcdn.com/sh.svg'),
(190, 'Saint Kitts and Nevis', 'https://flagcdn.com/kn.svg'),
(191, 'Saint Lucia', 'https://flagcdn.com/lc.svg'),
(192, 'Saint Martin (French part)', 'https://flagcdn.com/mf.svg'),
(193, 'Saint Pierre and Miquelon', 'https://flagcdn.com/pm.svg'),
(194, 'Saint Vincent and the Grenadines', 'https://flagcdn.com/vc.svg'),
(195, 'Samoa', 'https://flagcdn.com/ws.svg'),
(196, 'San Marino', 'https://flagcdn.com/sm.svg'),
(197, 'Sao Tome and Principe', 'https://flagcdn.com/st.svg'),
(198, 'Saudi Arabia', 'https://flagcdn.com/sa.svg'),
(199, 'Senegal', 'https://flagcdn.com/sn.svg'),
(200, 'Serbia', 'https://flagcdn.com/rs.svg'),
(201, 'Seychelles', 'https://flagcdn.com/sc.svg'),
(202, 'Sierra Leone', 'https://flagcdn.com/sl.svg'),
(203, 'Singapore', 'https://flagcdn.com/sg.svg'),
(204, 'Sint Maarten (Dutch part)', 'https://flagcdn.com/sx.svg'),
(205, 'Slovakia', 'https://flagcdn.com/sk.svg'),
(206, 'Slovenia', 'https://flagcdn.com/si.svg'),
(207, 'Solomon Islands', 'https://flagcdn.com/sb.svg'),
(208, 'Somalia', 'https://flagcdn.com/so.svg'),
(209, 'South Africa', 'https://flagcdn.com/za.svg'),
(210, 'South Georgia and the South Sandwich Islands', 'https://flagcdn.com/gs.svg'),
(211, 'Korea (Republic of)', 'https://flagcdn.com/kr.svg'),
(212, 'Spain', 'https://flagcdn.com/es.svg'),
(213, 'Sri Lanka', 'https://flagcdn.com/lk.svg'),
(214, 'Sudan', 'https://flagcdn.com/sd.svg'),
(215, 'South Sudan', 'https://flagcdn.com/ss.svg'),
(216, 'Suriname', 'https://flagcdn.com/sr.svg'),
(217, 'Svalbard and Jan Mayen', 'https://flagcdn.com/sj.svg'),
(218, 'Swaziland', 'https://flagcdn.com/sz.svg'),
(219, 'Sweden', 'https://flagcdn.com/se.svg'),
(220, 'Switzerland', 'https://flagcdn.com/ch.svg'),
(221, 'Syrian Arab Republic', 'https://flagcdn.com/sy.svg'),
(222, 'Taiwan', 'https://flagcdn.com/tw.svg'),
(223, 'Tajikistan', 'https://flagcdn.com/tj.svg'),
(224, 'Tanzania, United Republic of', 'https://flagcdn.com/tz.svg'),
(225, 'Thailand', 'https://flagcdn.com/th.svg'),
(226, 'Timor-Leste', 'https://flagcdn.com/tl.svg'),
(227, 'Togo', 'https://flagcdn.com/tg.svg'),
(228, 'Tokelau', 'https://flagcdn.com/tk.svg'),
(229, 'Tonga', 'https://flagcdn.com/to.svg'),
(230, 'Trinidad and Tobago', 'https://flagcdn.com/tt.svg'),
(231, 'Tunisia', 'https://flagcdn.com/tn.svg'),
(232, 'Turkey', 'https://flagcdn.com/tr.svg'),
(233, 'Turkmenistan', 'https://flagcdn.com/tm.svg'),
(234, 'Turks and Caicos Islands', 'https://flagcdn.com/tc.svg'),
(235, 'Tuvalu', 'https://flagcdn.com/tv.svg'),
(236, 'Uganda', 'https://flagcdn.com/ug.svg'),
(237, 'Ukraine', 'https://flagcdn.com/ua.svg'),
(238, 'United Arab Emirates', 'https://flagcdn.com/ae.svg'),
(239, 'United Kingdom of Great Britain and Northern Ireland', 'https://flagcdn.com/gb.svg'),
(240, 'United States of America', 'https://flagcdn.com/us.svg'),
(241, 'Uruguay', 'https://flagcdn.com/uy.svg'),
(242, 'Uzbekistan', 'https://flagcdn.com/uz.svg'),
(243, 'Vanuatu', 'https://flagcdn.com/vu.svg'),
(244, 'Venezuela (Bolivarian Republic of)', 'https://flagcdn.com/ve.svg'),
(245, 'Vietnam', 'https://flagcdn.com/vn.svg'),
(246, 'Wallis and Futuna', 'https://flagcdn.com/wf.svg'),
(247, 'Western Sahara', 'https://flagcdn.com/eh.svg'),
(248, 'Yemen', 'https://flagcdn.com/ye.svg'),
(249, 'Zambia', 'https://flagcdn.com/zm.svg'),
(250, 'Zimbabwe', 'https://flagcdn.com/zw.svg');

-- --------------------------------------------------------

--
-- Structure de la table `players`
--

CREATE TABLE `players` (
  `id_player` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `position` text NOT NULL,
  `number` int NOT NULL,
  `url_image` text,
  `favorite_team` text,
  `id_country` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `players`
--

INSERT INTO `players` (`id_player`, `firstname`, `lastname`, `dob`, `position`, `number`, `url_image`, `favorite_team`, `id_country`) VALUES
(3, 'Figo', 'Giradinhoza', '1990-08-27', 'MG', 28, 'https://res.cloudinary.com/db2sa2bxv/image/upload/v1672607061/WhatsApp_Image_2023-01-01_at_22.03.09_ysctuz.jpg', 'PSG', 1),
(4, 'ronaldinho', 'gaucho', '1990-08-28', 'MG', 10, 'https://res.cloudinary.com/db2sa2bxv/image/upload/v1672607050/WhatsApp_Image_2023-01-01_at_22.03.09_1_d3krle.jpg', 'psg', 32),
(5, 'okookko', 'gaucho', '1990-08-28', 'MG', 10, 'https://res.cloudinary.com/db2sa2bxv/image/upload/v1672607050/WhatsApp_Image_2023-01-01_at_22.03.09_1_d3krle.jpg', 'psg', 32),
(6, 'Ghislain', 'Girard', '1998-08-20', 'att', 28, '', 'psg', 78);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id_country`);

--
-- Index pour la table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id_player`),
  ADD KEY `id_country` (`id_country`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `countries`
--
ALTER TABLE `countries`
  MODIFY `id_country` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT pour la table `players`
--
ALTER TABLE `players`
  MODIFY `id_player` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `players_ibfk_1` FOREIGN KEY (`id_country`) REFERENCES `countries` (`id_country`);
COMMIT;